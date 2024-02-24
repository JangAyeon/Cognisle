import styled from "@emotion/styled"
import router, { useRouter } from "next/router"
import {
  FormEvent,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react"

import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"
import FormButton from "@/components/atoms/button/FormButton"
import UnderLineInput from "@/components/atoms/input/UnderLineInput"
import Text from "@/components/atoms/typo/Text"
import AuthModal, { AuthModalProps } from "@/components/modal/AuthModal"

import { authApi } from "@/apis/authApi"

import { IAuthSBInfo, ISignupForm } from "@/types/common/authProps"
import { ModalProps } from "@/types/common/modalProps"

import { setUserInfo } from "@/utils/auth"
import { SignUpValidation, dsIdCheck } from "@/utils/formValidation"

const Input_Common = {
  width: 20.3,
  height: 4.0,
  backgroundColor: "transparent",
  borderColor: "--color-green-04",
  color: "--color-green-04",
  fontSize: 1.2,
  opacity: 50,
  padding: 0,
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
    width: 14,
  },
]

const SignupForm = () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState<AuthModalProps>({
    state: "success",
    text: "",
    isOpen: false,
  })

  const [isDsIdValid, setIsDsIdValid] = useState(false)

  const handleDsIdCheck = async (e: MouseEvent<HTMLButtonElement>) => {
    const { form } = e.target as HTMLFormElement
    const signupForm = new FormData(form)
    const dsId = signupForm.get("dsId")
    const text = await dsIdCheck(dsId, setIsDsIdValid)
    console.log(dsId, text)
    if (text) {
      setIsModalOpen({
        state: isDsIdValid ? "success" : "fail",
        text,
        isOpen: true,
      })
      console.log(isDsIdValid)
      if (!isDsIdValid) {
        form.dsId.value = ""
      }
    }
  }

  useEffect(() => {}, [isDsIdValid])

  const handleModalOpen = (text: string, state: AuthModalProps["state"]) => {
    // console.log("open")
    setIsModalOpen({ state, text, isOpen: true })
  }

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const signupForm = new FormData(e.currentTarget)
    const params: ISignupForm = {
      email: signupForm.get("email"),
      password: signupForm.get("password"),
      options: {
        data: {
          name: signupForm.get("name"),
          dsId: isDsIdValid ? signupForm.get("dsId") : "",
        },
      },
    }

    SignUpValidation(params, setIsModalOpen)

    if (isModalOpen.state === "success" && !isModalOpen.isOpen) {
      try {
        const {
          data: { user, session },
          error,
        } = await authApi.signup(params)
        if (user && session) {
          setUserInfo({ user, session } as IAuthSBInfo)
          handleModalOpen("회원가입에 성공하였습니다.", "success")
          router.replace("/")
        } else {
          handleModalOpen("사용 불가능한 이메일 및 비밀번호입니다.", "fail")
        }
      } catch (error) {
        console.log(error)
        alert(error)
      }
    }
  }

  return (
    <>
      <div>
        {isModalOpen && (
          <AuthModal
            state={isModalOpen.state}
            text={isModalOpen.text}
            isOpen={isModalOpen.isOpen}
            onClose={() => setIsModalOpen({ ...isModalOpen, isOpen: false })}
          />
        )}
        <FormWrapper onSubmit={handleSignup}>
          {Input_List.map((item, idx) => (
            <FormInputWrapper key={idx}>
              <Text
                size={1.6}
                text={item.label}
                weight="bold"
                color={"--color-green-04"}
              />
              <UnderLineInput {...item} key={idx} />

              {item.name === "dsId" && (
                <DsIdCheckButton type="button" onClick={handleDsIdCheck}>
                  존재 <br />
                  확인
                </DsIdCheckButton>
              )}
            </FormInputWrapper>
          ))}

          <FormButton width={28} height={4.0} type="submit" text="회원가입" />
        </FormWrapper>
      </div>

      <AuthTypeButton>
        <BorderPointBtn
          width={28.0}
          height={4.0}
          mainColor="transparent"
          text="로그인"
          textSize={1.6}
          textColor="--color-green-04"
          link="/auth?type=login"
        />
      </AuthTypeButton>
    </>
  )
}

export default SignupForm

const FormWrapper = styled.form``

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: flex-end;
  width: 28rem;
  margin-bottom: 3rem;
`
const AuthTypeButton = styled.div`
  margin-top: 1.2rem;
`
const DsIdCheckButton = styled.button`
  width: 5.2rem;
  height: 4rem;
  background-color: var(--color-green-04);
  border-radius: 0 1.5rem 1.5rem 1.5rem;
  font-size: 1.2rem;
  color: var(--color-yellow-01);
  font-weight: bold;
`
