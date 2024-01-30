import { authApi } from "@/apis/authApi"
import { FormEvent } from "react"
import { useRouter } from "next/router"
import { IAuthSBInfo } from "@/types/common/authProps"
import { setUserInfo } from "@/utils/auth"
import UnderLineInput from "@/components/atoms/input/UnderLineInput"

const Input_Common = {
  width: 203,
  height: 40,
  backgroundColor: "transparent",
  borderColor: "--color-green-04",
  color: "--color-green-04",
  padding: 4.5,
  size: 12,
  opacity: 50,
}

const Input_List = [
  {
    placeholder: "이메일 입력",
    type: "email",
    name: "email",
    autoComplete: "email",
    ...Input_Common,
  },
  {
    placeholder: "비밀번호",
    type: "password",
    name: "password",
    ...Input_Common,
  },
  {
    placeholder: "사용자 이름",
    type: "text",
    name: "name",
    ...Input_Common,
  },
  {
    placeholder: "디스코드 아이디",
    type: "text",
    name: "dsId",
    ...Input_Common,
  },
]

const SignupForm = () => {
  const router = useRouter()

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

  return (
    <>
      <div>
        <form onSubmit={handleSignup}>
          {Input_List.map((item, idx) => (
            <UnderLineInput {...item} key={idx} />
          ))}
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
