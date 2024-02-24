import styled from "@emotion/styled"

import Logo from "@/components/atoms/logo/Logo"
import LoginForm from "@/components/forms/LoginForm"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
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
      <Logo
        type="main"
        width={240}
        height={124}
        alt="loading logo"
        padding={11.8}
      />
      <LoginContainer>
        <AuthTitle text="로그인" />

        <LoginForm />
      </LoginContainer>
    </BackgroundLayout>
  )
}

export default Login

const LoginContainer = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
