import styled from "@emotion/styled"

const SubAuthButton = ({
  text,
  onClick,
}: {
  text: string
  onClick: () => Promise<boolean>
}) => {
  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>
}

export default SubAuthButton
const ButtonWrapper = styled.button`
  padding: 0 11.6rem;
  font-size: 1.2rem;
  color: var(--color-green-04);
  text-decoration: underline;
`
