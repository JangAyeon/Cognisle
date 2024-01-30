import Triangle from "@/components/atoms/triangle/Triangle"
import Text from "@/components/typo/Text"
import styled from "@emotion/styled"

interface IAuthTitle {
  text: "LOGIN" | "SIGNUP"
}

const AuthTitle = ({ text }: IAuthTitle) => {
  return (
    <AuthTitleWrapper>
      <Text weight="bold" size={24} color="--color-green-04" text={text} />
      <Triangle type="original" width={80} height={38} alt="title triangle" />
    </AuthTitleWrapper>
  )
}

export default AuthTitle

const AuthTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
