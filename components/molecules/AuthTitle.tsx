import styled from "@emotion/styled"

import Triangle from "@/components/atoms/triangle/Triangle"
import Text from "@/components/atoms/typo/Text"

interface IAuthTitle {
  text: "로그인" | "회원가입"
}

const AuthTitle = ({ text }: IAuthTitle) => {
  return (
    <AuthTitleWrapper>
      <Text weight="bold" size={2.0} color="--color-green-04" text={text} />
      <Triangle type="original" width={80} height={38} alt="title triangle" />
    </AuthTitleWrapper>
  )
}

export default AuthTitle

const AuthTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9.6rem;
  margin-bottom: 2.7rem;
`
