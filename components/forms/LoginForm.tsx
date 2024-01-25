import { authApi } from "@/apis/authApi"
import { useInput } from "@/hooks/useInput"
import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { setUserInfo } from "@/utils/auth"
import { IAuthSBInfo } from "@/types/common/authProps"
import styled from "@emotion/styled"
import TextInput from "@/components/atoms/input/TextInput"

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
        setUserInfo({ user, session } as IAuthSBInfo)
        alert("로그인에 성공함")
        router.reload() // middleware.ts 거쳐 가기 위함
      }
    } catch (error) {
      alert(error)
    }
  }

  const handleSignupBtn = () => {
    console.log("handleSignupBtn")
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
            color="--color-green-04"
            backgroundColor="--color-yellow-01"
            width={280}
            height={40}
            size={16}
            padding={16}
          />
          <TextInput
            placeholder="비밀번호"
            type="password"
            name="password"
            autoComplete="current-password"
            color="--color-green-04"
            backgroundColor="--color-yellow-01"
            width={280}
            height={40}
            size={16}
            padding={16}
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
          <Button width={280} height={40} type="submit">
            로그인{" "}
          </Button>
        </form>
      </div>
      <div>
        <div>
          <Button
            type="button"
            width={280}
            height={40}
            onClick={handleSignupBtn}
          >
            회원가입
          </Button>
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
