import { authApi } from "@/apis/authApi"
import { useInput } from "@/hooks/useInput"
import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { IAuthSBInfo } from "@/types/common/authProps"
import { setUserInfo } from "@/utils/auth"
import UnderLineInput from "@/components/atoms/input/UnderLineInput"

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
    // console.log("handleSignupBtn")
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

    // console.log("handleSignup", params)
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
          <UnderLineInput
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일 입력"
            type="email"
            name="email"
            autoComplete="email"
            width={203}
            height={40}
            backgroundColor="transparent"
            borderColor="--color-green-04"
            color="--color-green-04"
            padding={4.5}
            size={12}
            opacity={50}
          />
          <UnderLineInput
            placeholder="비밀번호 입력"
            type="password"
            name="password"
            autoComplete="email"
            width={203}
            height={40}
            backgroundColor="transparent"
            borderColor="--color-green-04"
            color="--color-green-04"
            padding={4.5}
            size={12}
            opacity={50}
          />{" "}
          <UnderLineInput
            placeholder="사용자 이름 입력"
            type="text"
            name="name"
            width={203}
            height={40}
            backgroundColor="transparent"
            borderColor="--color-green-04"
            color="--color-green-04"
            padding={4.5}
            size={12}
            opacity={50}
          />
          <UnderLineInput
            placeholder="디스코드 아이디 입력"
            type="text"
            name="dsId"
            width={203}
            height={40}
            backgroundColor="transparent"
            borderColor="--color-green-04"
            color="--color-green-04"
            padding={4.5}
            size={12}
            opacity={50}
          />
          <button type="submit">회원가입 </button>
        </form>
      </div>
      <div>
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
