import LoginForm from "@/components/forms/LoginForm"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import MainLogo from "@/public/assets/image/logo/mainLogo.svg"
import Text from "@/components/typo/Text"

const Login = () => {
  return (
    <BackgroundLayout
      imgSrc={"/assets/image/triangle/background.svg"}
      startColor="--gradient-yellow"
      endColor="--color-green-03"
      degree="180deg"
      imgWidth={430}
      height={1100}
    >
      <MainLogo />
      <Text weight="bold" size={24} color="--color-green-04" text="LOGIN" />

      <LoginForm />
    </BackgroundLayout>
  )
}

export default Login
