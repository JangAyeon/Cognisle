import LoginForm from "@/components/forms/LoginForm"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import Text from "@/components/typo/Text"
import Triangle from "@/components/atoms/triangle/Triangle"
import Logo from "@/components/atoms/logo/Logo"

const Login = () => {
  return (
    <BackgroundLayout
      imgSrc={"/assets/background/triangle.svg"}
      startColor="--gradient-yellow"
      endColor="--color-green-03"
      degree="180deg"
      imgWidth={430}
      height={1000}
    >
      <Logo type="main" width={240} height={124} alt="loading logo" />
      <Text weight="bold" size={24} color="--color-green-04" text="LOGIN" />
      <Triangle type="original" width={76} height={38} alt="title triangle" />
      <LoginForm />
    </BackgroundLayout>
  )
}

export default Login
