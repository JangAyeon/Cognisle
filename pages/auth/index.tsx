import { useRouter } from "next/router"
import { authApi } from "@/apis/authApi"
import { useInput } from "@/hooks/useInput"
import { FormEvent, useEffect, useState } from "react"
import LogoutBtn from "@/components/LogoutBtn"
import SignupForm from "@/components/forms/SignupForm"
import LoginForm from "@/components/forms/LoginForm"

const Auth = () => {
  const router = useRouter()
  const { type } = router.query

  return (
    <>
      <div>{type === "signup" && <SignupForm />}</div>
      <div>{type === "login" && <LoginForm />}</div>
    </>
  )
}

export default Auth
