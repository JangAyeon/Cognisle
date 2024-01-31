import { authApi } from "@/apis/authApi"
import { useInput } from "@/hooks/useInput"
import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"
import styled from "@emotion/styled"
import TextInput from "@/components/atoms/input/TextInput"
import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"

const TextInputStyles = {
  color: "--color-green-04",
  backgroundColor: "--color-yellow-01",
  width: 280,
  height: 40,
  fontSize: 16,
  padding: 16,
}

const SignupForm = () => {
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
      }
    } catch (error) {
      alert(error)
    }
  }

  const handleSignupBtn = () => {
    // console.log("handleSignupBtn")
    router.push({ href: router.pathname, query: { type: "signup" } })
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
          <BorderPointBtn
            pointHeight={40}
            pointWidth={40}
            mainColor="--color-green-04"
            text="로그인"
            textSize={16}
            width={280}
            height={40}
            textColor="--color-yellow-01"
          />
        </form>
      </div>
      <div>
        <div>
          <BorderPointBtn
            width={280}
            height={40}
            mainColor="transparent"
            text="회원가입"
            textSize={16}
            textColor="--color-green-04"
            onClick={handleSignupBtn}
          />
        </div>
      </div>
    </>
  )
}

export default SignupForm

const Button = styled.button<{ height: number; width: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  color: var(--color-yellow-01);
  background-color: var(--color-green-04);
`

const CheckBox = styled.input`
  border: solid 7px black;
`
