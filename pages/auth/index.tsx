import { useRouter } from "next/router"
import SignupForm from "@/components/forms/SignupForm"
import Login from "@/components/pages/login"

const Auth = () => {
  const router = useRouter()
  const { type } = router.query

  return (
    <>
      {type === "signup" && <SignupForm />}
      {type === "login" && <Login />}
    </>
  )
}

export default Auth
