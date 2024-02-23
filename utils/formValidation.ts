import { Dispatch, SetStateAction } from "react"

import { AuthModalProps } from "@/components/modal/AuthModal"

import { IForm } from "@/types/common/authProps"

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
  if (email === null || email === "") {
    return "이메일을 입력하시오"
  } else if (typeof email === "string" && !email_format.test(email)) {
    return "올바른 형식의 이메일을 입력하시오"
  }
}

const LoginValidation = (
  form: IForm,
  setIsModalOpen: Dispatch<SetStateAction<AuthModalProps>>
) => {
  const { email, password } = form

  const isEmailValid = emailCheck(email)
  const isPasswordValid = passwordCheck(password)
  // const passwordCheck = passwordCheck(password)

  console.log(isEmailValid, isPasswordValid)
  if (isEmailValid) {
    setIsModalOpen({ state: "fail", text: isEmailValid, isOpen: true })
  } else if (isPasswordValid) {
    setIsModalOpen({ state: "fail", text: isPasswordValid, isOpen: true })
  }
}

const SignUpValidation = (form: IForm) => {
  console.log(form)
}

export { LoginValidation, SignUpValidation }
