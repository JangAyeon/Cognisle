import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { FormEvent, useEffect, useState } from "react"

import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"
import FormButton from "@/components/atoms/button/FormButton"
import TextInput from "@/components/atoms/input/TextInput"
import Text from "@/components/atoms/typo/Text"
import AuthModal, {
  AuthModalProps,
  IAuthModal,
} from "@/components/modal/AuthModal"

import { useInput } from "@/hooks/useInput"
import useStateModal from "@/hooks/useStateModal"

import { authApi } from "@/apis/authApi"

import { ILoginForm } from "@/types/common/authProps"

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
  /*const [isModalOpen, setIsModalOpen] = useState<AuthModalProps>({
    state: "fail",
    text: "",
    isOpen: false,
  })*/
  const { state, text, isOpen, setStateModal } = useStateModal()
  const handleModalOpen = (
    text: IAuthModal["text"],
    state: IAuthModal["state"]
  ) => {
    // console.log("open")
    setStateModal({ state, text, isOpen: true })
  }
  const [email, onChangeEmail, setEmail] = useInput("")
  const [emailFlagCheck, setEmailFlagCheck] = useState(false)
  const LS_EMAIL = localStorage.getItem("LS_EMAIL")
  const router = useRouter()

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

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const loginForm = new FormData(e.currentTarget)
    const params: ILoginForm = {
      email: loginForm.get("email"),
      password: loginForm.get("password"),
    }
    LoginValidation(params, setStateModal)

    handleLocalStorageEmail()
    if (state === "success" && !isOpen) {
      try {
        const {
          data: { user, session },
          error,
        } = await authApi.login(params)
        if (user && session) {
          handleModalOpen("로그인에 성공하였습니다.", "success")
          router.reload() // middleware.ts 거쳐 가기 위함
        } else {
          // alert(error?.message)
          handleModalOpen("아이디 또는 비밀번호가 올바르지 않습니다", "fail")
        }
      } catch (error: any) {
        handleModalOpen(error.message, "fail")
      }
    }
  }

  const CloseModal = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStateModal({ state, text, isOpen: false })
  }

  useEffect(() => {
    if (LS_EMAIL) {
      setEmail(LS_EMAIL)
      setEmailFlagCheck(true)
    }
  }, [LS_EMAIL, setEmail])

  useEffect(() => {
    if (isOpen) {
      CloseModal()
    }
  }, [isOpen])

  return (
    <>
      <div>
        {text && (
          <AuthModal
            state={state}
            text={text}
            isOpen={isOpen}
            onClose={() => setStateModal({ state, text, isOpen: false })}
          />
        )}
        <FormWrapper onSubmit={handleLogin}>
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
      <div>
        <AuthTypeButton>
          <BorderPointBtn
            width={28.0}
            height={4.0}
            mainColor="transparent"
            text="회원가입"
            textSize={1.6}
            textColor="--color-green-04"
            link="/auth?type=signup"
          />
        </AuthTypeButton>
      </div>
    </>
  )
}

export default LoginForm

type CheckBoxStyle = {
  checked: boolean
}

const CheckBox = styled.input<CheckBoxStyle>`
  border: solid 0.3rem var(--color-green-04);
  width: 1rem;
  height: 1rem;
  background-color: ${({ checked }) =>
    checked ? `var(--color-green-04)` : "transparent"};
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

const AuthTypeButton = styled.div`
  margin-top: 1.2rem;
`
