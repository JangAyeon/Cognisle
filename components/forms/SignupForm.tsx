import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"
import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react"

import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"
import FormButton from "@/components/atoms/button/FormButton"
import SubAuthButton from "@/components/atoms/button/SubAuth"
import UnderLineInput from "@/components/atoms/input/UnderLineInput"
import Text from "@/components/atoms/typo/Text"
import AuthModal from "@/components/modal/AuthModal"

import useStateModal from "@/hooks/useStateModal"

import { authApi } from "@/apis/authApi"

import { IAuthSBInfo } from "@/types/common/authProps"

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
    type: "string",
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
  const formRef = useRef<HTMLFormElement>(null)
  const { state, text, isOpen, setStateModal, setIsOpen, closeModal } =
    useStateModal()

  const [isDsIdValid, setIsDsIdValid] = useState(false)

  const getFormValue = () => {
    if (formRef.current) {
      const signupForm = new FormData(formRef.current)
      return {
        email: signupForm.get("email"),
        password: signupForm.get("password"),
        options: {
          data: {
            name: signupForm.get("name"),
            dsId: isDsIdValid ? signupForm.get("dsId") : "",
          },
        },
      }
    }

    return {
      email: "",
      password: "",
      options: {
        data: {
          name: "",
          dsId: "",
        },
      },
    }
  }

  const handleDsIdCheck = async (e: MouseEvent<HTMLButtonElement>) => {
    const { form } = e.target as HTMLFormElement
    const signupForm = new FormData(form)
    const dsId = signupForm.get("dsId")
    const text = await dsIdCheck(dsId, setIsDsIdValid)
    // console.log(dsId, text)
    if (text) {
      setStateModal({
        state: isDsIdValid ? "success" : "fail",
        text,
        isOpen: true,
      })
      // console.log(isDsIdValid)
      if (!isDsIdValid) {
        form.dsId.value = ""
      }
    }
  }

  const handleSignupValid = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formValue = getFormValue()

    await SignUpValidation(formValue, setStateModal)
  }

  const handleSignup = async () => {
    const formValue = getFormValue()
    try {
      const {
        data: { user, session },
        error,
      } = await authApi.signup(formValue)
      if (user && session) {
        setUserInfo({ user, session } as IAuthSBInfo)
        setStateModal({
          isOpen: true,
          text: "회원가입에 성공하였습니다.",
          state: "success",
        })
        router.replace("/")
      } else {
        setStateModal({
          isOpen: true,
          state: "fail",
          text: "사용 불가능한 이메일 및 비밀번호입니다.",
        })
      }
    } catch (error: any) {
      console.log(error)
      setStateModal({
        isOpen: true,
        state: "fail",
        text: error.message,
      })
    }
  }

  useEffect(() => {
    if (!isOpen && state === "success") {
      handleSignup()
    }
  }, [isOpen, state])

  return (
    <>
      <div>
        {text && isOpen && (
          <AuthModal
            state={state}
            text={text}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        )}
        <FormWrapper onSubmit={handleSignupValid} ref={formRef}>
          {Input_List.map((item, idx) => (
            <FormInputWrapper key={idx}>
              <Text
                size={1.6}
                text={item.label}
                weight="bold"
                color={"--color-green-04"}
              />
              <div>
                <UnderLineInput {...item} key={idx} />
                {item.name === "dsId" && (
                  <Link
                    href="https://fringe-polyester-65b.notion.site/ea0bb733257540c4a8e6196055321540"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "rgba(3, 107, 87, 1)",
                    }}
                  >
                    내 디스코드 아이디 확인 방법
                  </Link>
                )}
              </div>

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

      <SubAuthButton
        text={"로그인"}
        onClick={() => router.push("/auth?type=login")}
      />
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

const DsIdCheckButton = styled.button`
  width: 5.2rem;
  height: 4rem;
  background-color: var(--color-green-04);
  border-radius: 0 1.5rem 1.5rem 1.5rem;
  font-size: 1.2rem;
  color: var(--color-yellow-01);
  font-weight: bold;
`
