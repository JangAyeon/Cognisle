import Logo from "@/components/atoms/logo/Logo"
import SignupForm from "@/components/forms/SignupForm"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import AuthTitle from "@/components/molecules/AuthTitle"

const Signup = () => {
  return (
    <BackgroundLayout
      imgSrc={"/assets/background/triangle.svg"}
      startColor="--gradient-yellow"
      endColor="--color-blue-01"
      degree="180deg"
      imgWidth={43}
      imgHeight={84.9}
    >
      <Logo
        type="main"
        width={240}
        height={124}
        alt="loading logo"
        padding={11.8}
      />
      <AuthTitle text="회원가입" />
      <SignupForm />
    </BackgroundLayout>
  )
}

export default Signup
