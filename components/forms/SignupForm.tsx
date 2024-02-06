import { authApi } from "@/apis/authApi"
import { FormEvent } from "react"
import { useRouter } from "next/router"
import { IAuthSBInfo } from "@/types/common/authProps"
import { setUserInfo } from "@/utils/auth"
import UnderLineInput from "@/components/atoms/input/UnderLineInput"
import Text from "@/components/atoms/typo/Text"
import styled from "@emotion/styled"

const Input_Common = {
  width: 20.3,
  height: 4.0,
  backgroundColor: "transparent",
  borderColor: "--color-green-04",
  color: "--color-green-04",
  padding: 4.5,
  fontSize: 1.2,
  opacity: 50,
}

const Input_List = [
  {
    label: "이메일",
    placeholder: "이메일 입력",
    type: "email",
    name: "email",
    autoComplete: "email",
    ...Input_Common,
  },
  {
    label: "비밀번호",
    placeholder: "비밀번호",
    type: "password",
    name: "password",
    ...Input_Common,
  },
  {
    label: "이름",
    placeholder: "사용자 이름",
    type: "text",
    name: "name",
    ...Input_Common,
  },
  {
    label: ["디스코드", <br />, "아이디"],
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
    router.push("auth?type=login")
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
            <FormInputWrapper key={idx}>
              <Text
                size={1.6}
                text={item.label}
                weight="bold"
                color={"--color-green-04"}
              />
              <UnderLineInput {...item} key={idx} />
            </FormInputWrapper>
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

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
