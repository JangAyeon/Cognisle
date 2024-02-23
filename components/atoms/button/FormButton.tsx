import styled from "@emotion/styled"

import Text from "@/components/atoms/typo/Text"

interface IFormButton {
  height: number
  width: number
  text: string
  type?: "submit" | "button"
}

const FormButton = ({ height, width, text, type = "submit" }: IFormButton) => {
  return (
    <Button width={width} height={height} type={type}>
      <Text weight="bold" size={1.6} color="--color-yellow-01" text={text} />
    </Button>
  )
}

export default FormButton

type FormButtonStyle = Pick<IFormButton, "height" | "width">

const Button = styled.button<FormButtonStyle>`
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  color: var(--color-yellow-01);
  background-color: var(--color-green-04);
  border-radius: 0 1.5rem 1.5rem 1.5rem;
`
