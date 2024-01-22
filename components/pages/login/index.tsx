import Image from "next/image"
import LoginForm from "@/components/forms/LoginForm"
import styled from "@emotion/styled"
import BackgroundTriangle from "@/public/image/triangle/background.svg"
import TitleTraingle from "@/public/image/triangle/title.svg"
import MainLogo from "@/public/image/logo/mainLogo.svg"

const Login = () => {
  return (
    <LoginLayout bg={BackgroundTriangle}>
      <MainLogo />
      <Title>LOGIN</Title>
      <TitleTraingle />
      <LoginForm />
    </LoginLayout>
  )
}

export default Login

const LoginLayout = styled.div<{ bg: string }>`
  width: 100%;
  height: 1100px;
  background: linear-gradient(
      180deg,
      var(--gradient-yellow),
      var(--color-green-02)
    ),
    url("/image/background/triangle.svg");
  background-blend-mode: overlay;
  background-size: 430px auto;
  background-position: left bottom;
  background-repeat: no-repeat;
`
const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: var(--color-green-04);
`
