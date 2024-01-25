import Triangle from "@/components/atoms/triangle/Triangle"
import MainLogo from "@/public/assets/logo/mainLogo.svg"
import styled from "@emotion/styled"

const Loading = () => {
  return (
    <PageWrapper>
      <Triangle
        type="original"
        width={430}
        height={212}
        alt="loading Upper triangle"
      />
      <MainLogo width={430} height={212} />
      <Triangle
        type="reversed"
        width={430}
        height={212}
        alt="loading lower triangle"
      />
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
