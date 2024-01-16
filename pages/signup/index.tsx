import SignupForm from "@/pages/signup/form"
import { useState, useEffect } from "react"

const Signup = () => {
  const [isMount, setIsMount] = useState(false)
  useEffect(() => {
    setIsMount(true)
  }, [])
  if (!isMount) return null
  return <SignupForm />
}

export default Signup
