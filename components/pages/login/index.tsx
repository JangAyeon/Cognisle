import LoginForm from "@/components/forms/LoginForm"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import MainLogo from "@/public/assets/logo/mainLogo.svg"
import Text from "@/components/typo/Text"

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
      <MainLogo />
      <Text weight="bold" size={24} color="--color-green-04" text="LOGIN" />

      <LoginForm />
    </BackgroundLayout>
  )
}

export default Login
