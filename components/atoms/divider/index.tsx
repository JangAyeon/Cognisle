import styled from "@emotion/styled"
import Image from "next/image"

const Divider = () => {
  return (
    <DividerWrapper>
      <Image
        src="/assets/divider/pink.png"
        height={3}
        width={180}
        alt="pink divider"
      />
    </DividerWrapper>
  )
}

export default Divider

const DividerWrapper = styled.div`
  margin: 1.5rem 0;
`
