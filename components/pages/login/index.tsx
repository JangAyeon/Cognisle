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
      imgWidth={43}
      imgHeight={84.9}
    >
      <Logo type="main" width={240} height={124} alt="loading logo" />
      <AuthTitle text="로그인" />

      <LoginForm />
    </BackgroundLayout>
  )
}

export default Login
