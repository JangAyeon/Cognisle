import styled from "@emotion/styled"

import {
  ITextInput,
  InputStyle,
  InputWrapper,
  InputWrapperStyle,
  Input as Input_,
} from "./TextInput"

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
  fontSize,
  padding,
  borderColor,
  opacity,
  margin,
}: IUnderLineInput) => {
  return (
    <UnderLineInputWrapper
      width={width}
      backgroundColor={backgroundColor}
      padding={padding}
      borderColor={borderColor}
      margin={margin}
    >
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        autoComplete={autoComplete}
        color={color}
        fontSize={fontSize}
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
  margin-bottom: ${({ margin }) => (margin ? `${margin}rem` : "0")};
`

const Input = styled(Input_)<UnderLineInputStyle>`
  &::placeholder {
    opacity: ${({ opacity }) => `${opacity}%`};
  }
`
