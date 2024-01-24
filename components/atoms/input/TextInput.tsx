import styled from "@emotion/styled"
import { ChangeEvent } from "react"
import Image from "next/image"

interface ITextInput {
  type: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  name: string
  autoComplete?: string
  width: number
  height: number
  color: string
  backgroundColor: string
  imgSrc?: string
  imgWidth?: number
  imgHeigth?: number
  size: number
  padding: number
}

const TextInput = ({
  value,
  onChange,
  placeholder,
  type,
  name,
  autoComplete,
  width,
  height,
  color,
  backgroundColor,
  imgSrc,
  imgWidth,
  imgHeigth,
  size,
  padding,
}: ITextInput) => {
  console.log(padding)
  return (
    <InputWrapper
      backgroundColor={backgroundColor}
      padding={padding}
      width={width}
      height={height}
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
      {imgSrc && (
        <Image
          src={imgSrc}
          width={imgWidth}
          height={imgHeigth}
          alt="input 아이콘"
        />
      )}
    </InputWrapper>
  )
}
type InputWrapperStyle = Pick<
  ITextInput,
  "backgroundColor" | "padding" | "width" | "height"
>
type InputStyle = Pick<ITextInput, "color" | "size">

const InputWrapper = styled.div<InputWrapperStyle>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${({ backgroundColor }) => `var(${backgroundColor})`};
  padding-left: ${({ padding }) => `${padding}px`};
`
const Input = styled.input<InputStyle>`
  height: 100%;
  width: 100%;
  background-color: transparent;

  &::placeholder {
    color: ${({ color }) => `var(${color})`};
    font-size: ${({ size }) => `${size}px`};
  }
`
export default TextInput
