import styled from "@emotion/styled"

import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import VisitContainer from "@/components/pages/vist"

const Island = () => {
  return (
    <PageWrapper>
      <BackgroundLayout
        imgSrc={"/assets/background/bubble.svg"}
        imgWidth={43}
        imgHeight={84.9}
        startColor="--gradient-yellow"
        endColor="--color-green-03"
        degree="180deg"
      >
        <VisitContainer />
      </BackgroundLayout>
    </PageWrapper>
  )
}

export default Island

const PageWrapper = styled.div`
  background-color: var(--color-blue-01);
  min-height: inherit;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`
