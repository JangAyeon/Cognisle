import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { FormEvent, useEffect, useRef, useState } from "react"

import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"
import FormButton from "@/components/atoms/button/FormButton"
import SubAuthButton from "@/components/atoms/button/SubAuth"
import TextInput from "@/components/atoms/input/TextInput"
import Text from "@/components/atoms/typo/Text"
import AuthModal from "@/components/modal/AuthModal"

import { useInput } from "@/hooks/useInput"
import useStateModal from "@/hooks/useStateModal"

import { authApi } from "@/apis/authApi"

import { LoginValidation } from "@/utils/formValidation"

const TextInputStyles = {
  color: "--color-green-04",
  backgroundColor: "--color-yellow-01",
  width: 28.0,
  height: 4.0,
  fontSize: 1.6,
  padding: 1.6,
  margin: 2.4,
}

const LoginForm = () => {
  const { state, text, isOpen, setStateModal, closeModal, setIsOpen } =
    useStateModal()
  const formRef = useRef<HTMLFormElement>(null)

  const [email, onChangeEmail, setEmail] = useInput("")
  const [emailFlagCheck, setEmailFlagCheck] = useState(false)
  const LS_EMAIL = localStorage.getItem("LS_EMAIL")
  const router = useRouter()

  const getFormValue = () => {
    if (formRef.current) {
      const loginForm = new FormData(formRef.current)
      return {
        email: loginForm.get("email"),
        password: loginForm.get("password"),
      }
    } else {
      return { email: "", password: "" }
    }
  }

  const handleEmailFlagCheck = () => {
    setEmailFlagCheck((prev) => !prev)
  }

  const handleLocalStorageEmail = () => {
    if (emailFlagCheck) {
      localStorage.setItem("LS_EMAIL", email)
    } else {
      localStorage.removeItem("LS_EMAIL")
    }
  }

  const handleLoginValid = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const FormValue = getFormValue()
    LoginValidation(FormValue, setStateModal)

    handleLocalStorageEmail()
  }

  const handleLogin = async () => {
    const FormValue = getFormValue()
    try {
      const {
        data: { user, session },
        error,
      } = await authApi.login(FormValue)
      if (user && session) {
        setStateModal({
          state: "success",
          text: "로그인에 성공하였습니다.",
          isOpen: true,
        })
        router.reload() // middleware.ts 거쳐 가기 위함
      } else {
        // alert(error?.message)
        setStateModal({
          state: "fail",
          text: "아이디 또는 비밀번호가 올바르지 않습니다",
          isOpen: true,
        })
      }
    } catch (error: any) {
      setStateModal({ text: error.message, state: "fail", isOpen: true })
    }
  }

  useEffect(() => {
    if (LS_EMAIL) {
      setEmail(LS_EMAIL)
      setEmailFlagCheck(true)
    }
  }, [LS_EMAIL, setEmail])

  useEffect(() => {
    if (state == "success" && !isOpen) {
      handleLogin()
    }
  }, [state])

  return (
    <>
      <div>
        {text && (
          <AuthModal
            state={state}
            text={text}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        )}
        <FormWrapper onSubmit={handleLoginValid} ref={formRef}>
          <TextInput
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일"
            type="string"
            name="email"
            autoComplete="email"
            {...TextInputStyles}
          />
          <TextInput
            placeholder="비밀번호"
            type="password"
            name="password"
            autoComplete="current-password"
            {...TextInputStyles}
          />
          <CheckBoxWrapper>
            <CheckBox
              type="checkbox"
              id="rememberEmail"
              checked={emailFlagCheck}
              onChange={() => handleEmailFlagCheck()}
            />
            <label htmlFor="rememberId">
              <Text
                text={"아이디 기억하기"}
                size={1.2}
                weight="normal"
                color={"--color-green-04"}
              />
            </label>
          </CheckBoxWrapper>
          <FormButton width={28} height={4.0} type="submit" text="로그인" />
        </FormWrapper>
      </div>

      <SubAuthButton
        text={"회원가입"}
        onClick={() => router.push("/auth?type=signup")}
      />
    </>
  )
}
export default LoginForm

type CheckBoxStyle = {
  checked: boolean
}

const CheckBox = styled.input<CheckBoxStyle>`
  border: solid 0.3rem var(--color-green-04);
  width: 2.2rem;
  height: 2.2rem;
  background-color: ${({ checked }) =>
    checked ? `var(--color-green-04)` : "transparent"};
  background-image: ${({ checked }) =>
    checked ? `url("/assets/yellow/marked.png")` : "none"};
  background-size: 1.5rem 1.2rem;
  background-repeat: no-repeat;
  background-position: center;
`

const FormWrapper = styled.form``

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.2rem;
  label {
    margin-left: 0.8rem;
  }
`
