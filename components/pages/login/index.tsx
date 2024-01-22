import LoginForm from "@/components/forms/LoginForm"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import TitleTraingle from "@/public/image/triangle/title.svg"
import MainLogo from "@/public/image/logo/mainLogo.svg"
import Text from "@/components/typo/text"

const Login = () => {
  return (
    <BackgroundLayout
      imgSrc={"/image/triangle/background.svg"}
      startColor="--gradient-yellow"
      endColor="--color-green-03"
      degree="180deg"
      imgWidth={430}
      height={1100}
    >
      <MainLogo />
      <Text weight="bold" size={24} color="--color-green-04" text="LOGIN" />

      <TitleTraingle />
      <LoginForm />
    </BackgroundLayout>
  )
}

export default Login
