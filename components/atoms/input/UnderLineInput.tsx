import {
  InputWrapper,
  InputWrapperStyle,
  ITextInput,
  Input as Input_,
  InputStyle,
} from "./TextInput"
import styled from "@emotion/styled"

interface IUnderLineInput extends ITextInput {
  borderColor: string
  opacity: number
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
  opacity,
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
        opacity={opacity}
      />
    </UnderLineInputWrapper>
  )
}

export default UnderLineInput

type UnderLineWrapperStyle = InputWrapperStyle & {
  borderColor: string
}

type UnderLineInputStyle = InputStyle & {
  opacity: number
}

const UnderLineInputWrapper = styled(InputWrapper)<UnderLineWrapperStyle>`
  border-bottom: ${({ borderColor }) => `0.1rem solid var(${borderColor})`};
`

const Input = styled(Input_)<UnderLineInputStyle>`
  &::placeholder {
    opacity: ${({ opacity }) => `${opacity}%`};
  }
`
