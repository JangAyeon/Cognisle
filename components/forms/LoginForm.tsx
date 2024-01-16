import { authApi } from "@/apis/authApi"
import { useInput } from "@/hooks/useInput"
import { FormEvent, useEffect, useState } from "react"
import LogoutBtn from "@/components/LogoutBtn"
import { useRouter } from "next/router"

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

    const signupForm = new FormData(e.currentTarget)
    const params = {
      email: signupForm.get("email"),
      password: signupForm.get("password"),
    }

    console.log("handleLogin", params)
    handleLocalStorageEmail()

    try {
      const { data, error } = await authApi.login(params)
      alert(data.user)
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
          <button type="submit">로그인 </button>
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
          <button type="button" onClick={handleSignupBtn}>
            회원가입
          </button>
        </div>
      </div>
    </>
  )
}

export default SignupForm
