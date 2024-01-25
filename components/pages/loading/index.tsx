import MainLogo from "@/public/assets/logo/mainLogo.svg"
import OriginalTriangle from "@/public/assets/triangle/original.svg"
import ReverseTriangle from "@/public/assets/triangle/reversed.svg"
import styled from "@emotion/styled"

const Loading = () => {
  return (
    <PageWrapper>
      <OriginalTriangle />
      <MainLogo width={240} height={124} />
      <ReverseTriangle />
    </PageWrapper>
  )
}

export default Loading

const PageWrapper = styled.div`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
