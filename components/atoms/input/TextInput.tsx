import styled from "@emotion/styled"
import { ChangeEvent } from "react"
import Image from "next/image"

export interface ITextInput {
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
  fontSize: number
  padding: number
  btnType?: "submit"
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
  fontSize,
  padding,
  btnType,
}: ITextInput) => {
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
        fontSize={fontSize}
      />
      {imgSrc && (
        <button type={btnType}>
          <Image
            src={imgSrc}
            width={imgWidth}
            height={imgHeigth}
            alt="input 아이콘"
          />
        </button>
      )}
    </InputWrapper>
  )
}

export type InputWrapperStyle = Pick<
  ITextInput,
  "backgroundColor" | "padding" | "width" | "height"
>
export type InputStyle = Pick<ITextInput, "color" | "fontSize">

export const InputWrapper = styled.div<InputWrapperStyle>`
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  background-color: ${({ backgroundColor }) => `var(${backgroundColor})`};
  padding: ${({ padding }) => `0 ${padding}rem`};
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  align-items: center;
`
export const Input = styled.input<InputStyle>`
  height: 100%;
  width: 100%;
  background-color: transparent;
  color: ${({ color }) => `var(${color})`};

  &::placeholder {
    color: ${({ color }) => `var(${color})`};
    font-size: ${({ fontSize }) => `${fontSize}rem`};
  }
`
export default TextInput
