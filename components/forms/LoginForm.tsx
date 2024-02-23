import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { FormEvent, useEffect, useState } from "react"

import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"
import FormButton from "@/components/atoms/button/FormButton"
import TextInput from "@/components/atoms/input/TextInput"
import AuthModal from "@/components/modal/AuthModal"

import { useInput } from "@/hooks/useInput"

import { authApi } from "@/apis/authApi"

const TextInputStyles = {
  color: "--color-green-04",
  backgroundColor: "--color-yellow-01",
  width: 28.0,
  height: 4.0,
  fontSize: 1.6,
  padding: 1.6,
}

const SignupForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    // console.log("open")
    setIsModalOpen(true)
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
    const params = {
      email: loginForm.get("email"),
      password: loginForm.get("password"),
    }

    handleLocalStorageEmail()

    try {
      const {
        data: { user, session },
        error,
      } = await authApi.login(params)
      if (user && session) {
        alert("로그인에 성공함")

        router.reload() // middleware.ts 거쳐 가기 위함
      } else {
        // alert(error?.message)
        handleModalOpen()
      }
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    if (LS_EMAIL) {
      setEmail(LS_EMAIL)
      setEmailFlagCheck(true)
    }
  }, [LS_EMAIL, setEmail])

  return (
    <>
      <div>
        {isModalOpen && (
          <AuthModal
            state="fail"
            text="아이디 또는 비밀번호가 올바르지 않씁니다"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        <form onSubmit={handleLogin}>
          <TextInput
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일"
            type="email"
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
          <div>
            <CheckBox
              type="checkbox"
              id="rememberEmail"
              checked={emailFlagCheck}
              onChange={() => handleEmailFlagCheck()}
            />
            <label htmlFor="rememberId"> 아이디 저장</label>
          </div>
          <FormButton width={28} height={4.0} type="submit" text="로그인" />
        </form>
      </div>
      <div>
        <div>
          <BorderPointBtn
            width={28.0}
            height={4.0}
            mainColor="transparent"
            text="회원가입"
            textSize={1.6}
            textColor="--color-green-04"
            link="/auth?type=signup"
          />
        </div>
      </div>
    </>
  )
}

export default SignupForm

const CheckBox = styled.input`
  border: solid 0.7rem black;
`
