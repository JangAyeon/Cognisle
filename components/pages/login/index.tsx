import LoginForm from "@/components/forms/LoginForm"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import Logo from "@/components/atoms/logo/Logo"
import AuthTitle from "@/components/molecules/AuthTitle"

const Login = () => {
  return (
    <BackgroundLayout
      imgSrc={"/assets/background/triangle.svg"}
      startColor="--gradient-yellow"
      endColor="--color-green-03"
      degree="180deg"
      imgWidth={430}
      imgHeight={849}
    >
      <Logo type="main" width={240} height={124} alt="loading logo" />
      <AuthTitle text="LOGIN" />

      <LoginForm />
    </BackgroundLayout>
  )
}

export default Login
