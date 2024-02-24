import { Dispatch, SetStateAction } from "react"

import { AuthModalProps } from "@/components/modal/AuthModal"

import { authApi } from "@/apis/authApi"

import { ILoginForm, ISignupForm } from "@/types/common/authProps"

const passwordCheck = (password: FormDataEntryValue | null) => {
  const password_format =
    /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/
  //console.log("비밀번호", password, password_format.test(password as string))
  if (!password) {
    return "비밀번호를 입력하시오"
  } else if (typeof password === "string" && !password_format.test(password)) {
    return "8~20자 영문 대소문자, 숫자, 특수문자를 사용하세요"
  }
}

const emailCheck = (email: FormDataEntryValue | null) => {
  const email_format =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
  //console.log("email", email, email_format.test(email as string))
  if (!email) {
    return "이메일을 입력하시오"
  } else if (typeof email === "string" && !email_format.test(email)) {
    return "올바른 형식의 이메일을 입력하시오"
  }
}

export const dsIdCheck = async (
  dsId: FormDataEntryValue | null,
  setIsDsIdValid: Dispatch<SetStateAction<boolean>>
) => {
  if (!dsId) {
    setIsDsIdValid(false)
    return "확인할 디스코드 아이디를 입력하시오"
  } else {
    const { data, error } = await authApi.getDsIdValid(dsId)
    if (error) {
      setIsDsIdValid(false)
      return "존재하지 않는 디스코드 아이디입니다."
    } else if (data) {
      const { dsTag, dsGlobalName } = data
      setIsDsIdValid(true)
      return `${dsTag}는 ${dsGlobalName}님으로\n확인되었습니다.`
    }
  }
}

const nameCheck = (name: FormDataEntryValue | null) => {
  //console.log(name)
  const name_format = /^.{2,8}$/
  if (!name) {
    return "이름을 입력하시오"
  } else if (typeof name === "string" && !name_format.test(name)) {
    return "최소 2글자, 최대 8글자의 이름을 입력하시오"
  }
}

const LoginValidation = (
  form: ILoginForm,
  setIsModalOpen: Dispatch<SetStateAction<AuthModalProps>>
) => {
  const { email, password } = form

  const isEmailValid = emailCheck(email)
  const isPasswordValid = passwordCheck(password)

  console.log(isEmailValid, isPasswordValid)
  if (isEmailValid) {
    SetAuthModalState("fail", isEmailValid, setIsModalOpen)
  } else if (isPasswordValid) {
    SetAuthModalState("fail", isPasswordValid, setIsModalOpen)
  }
}

const SignUpValidation = async (
  form: ISignupForm,
  setIsModalOpen: Dispatch<SetStateAction<AuthModalProps>>
) => {
  const {
    email,
    password,
    options: {
      data: { name, dsId },
    },
  } = form

  const isEmailValid = emailCheck(email)
  const isPasswordValid = passwordCheck(password)
  const isNameValid = nameCheck(name)

  if (isEmailValid) {
    SetAuthModalState("fail", isEmailValid, setIsModalOpen)
  } else if (isPasswordValid) {
    SetAuthModalState("fail", isPasswordValid, setIsModalOpen)
  } else if (isNameValid) {
    SetAuthModalState("fail", isNameValid, setIsModalOpen)
  }
}

const SetAuthModalState = (
  state: AuthModalProps["state"],
  text: string,

  setIsModalOpen: Dispatch<SetStateAction<AuthModalProps>>
) => {
  setIsModalOpen({ state, text, isOpen: true })
}

export { LoginValidation, SignUpValidation }
