import { InputWrapper, InputWrapperStyle, ITextInput, Input } from "./TextInput"
import styled from "@emotion/styled"

interface IUnderLineInput extends ITextInput {
  borderColor: string
}

const UnderLineInput = ({
  type,
  value,
  onChange,
  placeholder,
  name,
  autoComplete,
  width,
  height,
  color,
  backgroundColor,
  size,
  padding,
  borderColor,
}: IUnderLineInput) => {
  return (
    <UnderLineInputWrapper
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      padding={padding}
      borderColor={borderColor}
    >
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        autoComplete={autoComplete}
        color={color}
        size={size}
      />
    </UnderLineInputWrapper>
  )
}

export default UnderLineInput

type UnderLineWrapperStyle = InputWrapperStyle & {
  borderColor: string
}

const UnderLineInputWrapper = styled(InputWrapper)<UnderLineWrapperStyle>`
  border-bottom: ${({ borderColor }) => `0.2rem solid var(${borderColor})`};
`
