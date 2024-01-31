import { useRouter } from "next/router"
import Login from "@/components/pages/login"
import Signup from "@/components/pages/signup"

const Auth = () => {
  const router = useRouter()
  const { type } = router.query

  return (
    <>
      {type === "signup" && <Signup />}
      {type === "login" && <Login />}
    </>
  )
}

export default Auth
