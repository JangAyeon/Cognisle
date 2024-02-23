import { Dispatch, SetStateAction } from "react"

import { AuthModalProps } from "@/components/modal/AuthModal"

import { ILoginForm, ISignupForm } from "@/types/common/authProps"

const passwordCheck = (password: FormDataEntryValue | null) => {
  console.log("비밀번호", password)
  const password_format =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
  if (!password) {
    return "비밀번호를 입력하시오"
  } else if (typeof password === "string" && !password_format.test(password)) {
    return "8~20자 영문 대소문자, 숫자, 특수문자를 사용하세요"
  }
}

const emailCheck = (email: FormDataEntryValue | null) => {
  console.log("email", email)
  const email_format =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
  if (!email) {
    return "이메일을 입력하시오"
  } else if (typeof email === "string" && !email_format.test(email)) {
    return "올바른 형식의 이메일을 입력하시오"
  }
}

const nameCheck = (name: FormDataEntryValue | null) => {
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
    setIsModalOpen({ state: "fail", text: isEmailValid, isOpen: true })
  } else if (isPasswordValid) {
    setIsModalOpen({ state: "fail", text: isPasswordValid, isOpen: true })
  }
}

const SignUpValidation = (
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
  const isNameValid = passwordCheck(name)
  console.log(isEmailValid, isPasswordValid, name, dsId)
  if (isEmailValid) {
    setIsModalOpen({ state: "fail", text: isEmailValid, isOpen: true })
  } else if (isPasswordValid) {
    setIsModalOpen({ state: "fail", text: isPasswordValid, isOpen: true })
  } else if (isNameValid) {
    setIsModalOpen({ state: "fail", text: isNameValid, isOpen: true })
  }
}

export { LoginValidation, SignUpValidation }
