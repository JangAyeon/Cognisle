import styled from "@emotion/styled"

interface IText {
  weight: string
  color: string
  size: number
  text: (string | JSX.Element)[] | string
}

const Text = ({ weight, size, color, text }: IText) => {
  return (
    <TextWrapper weight={weight} size={size} color={color}>
      {text}
    </TextWrapper>
  )
}
export default Text

type Style = Omit<IText, "text">
const TextWrapper = styled.div<Style>`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => `var(${color})`};
`
