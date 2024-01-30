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
      imgWidth={430}
      imgHeight={849}
    >
      <AuthTitle text="SIGNUP" />
      <SignupForm />
    </BackgroundLayout>
  )
}

export default Signup
