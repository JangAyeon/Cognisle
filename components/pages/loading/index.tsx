import styled from "@emotion/styled"

import Logo from "@/components/atoms/logo/Logo"
import Triangle from "@/components/atoms/triangle/Triangle"

const Loading = () => {
  return (
    <PageWrapper>
      <Triangle
        type="original"
        width={430}
        height={212}
        alt="loading Upper triangle"
      />
      <Logo type="main" width={240} height={124} alt="loading logo" />
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
