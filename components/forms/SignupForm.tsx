import { authApi } from "@/apis/authApi"
import { useInput } from "@/hooks/useInput"
import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { IAuthSBInfo } from "@/types/common/authProps"
import { setUserInfo } from "@/utils/auth"

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
  const handleLoginBtn = () => {
    console.log("handleSignupBtn")
    router.push({ href: router.pathname, query: { type: "login" } })
  }

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const signupForm = new FormData(e.currentTarget)
    const params = {
      email: signupForm.get("email"),
      password: signupForm.get("password"),
      options: {
        data: {
          name: signupForm.get("name"),
          dsId: signupForm.get("dsId") || "",
        },
      },
    }

    console.log("handleSignup", params)
    handleLocalStorageEmail()

    try {
      const {
        data: { user, session },
        error,
      } = await authApi.signup(params)
      if (user && session) {
        setUserInfo({ user, session } as IAuthSBInfo)
        alert("회원가입 성공함")
        router.replace("/")
      }
    } catch (error) {
      console.log(error)
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
        <form onSubmit={handleSignup}>
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일 입력"
            type="email"
            name="email"
            autoComplete="email"
          />
          <input
            placeholder="비밀번호 입력"
            type="password"
            name="password"
            autoComplete="current-password"
          />
          <input placeholder="사용자 이름 입력" type="text" name="name" />
          <input placeholder="디스코드 아이디" type="text" name="dsId" />
          <button type="submit">회원가입 </button>
        </form>
      </div>
      <div>
        <div>
          <input
            type="checkbox"
            id="rememberEmail"
            checked={emailFlagCheck}
            onChange={() => handleEmailFlagCheck()}
          />
          <label htmlFor="rememberId"> 아이디 저장</label>
        </div>
        <div>
          <button type="button" onClick={handleLoginBtn}>
            로그인
          </button>
        </div>
      </div>
    </>
  )
}

export default SignupForm
