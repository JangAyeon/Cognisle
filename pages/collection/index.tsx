import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import styled from "@emotion/styled"
import ContentContainer from "@/components/pages/collection"

const Collection = () => {
  return (
    <PageWrapper>
      <BackgroundLayout
        startColor="--gradient-yellow"
        endColor="--color-orange-02"
        degree="180deg"
      >
        <ContentContainer />
      </BackgroundLayout>
    </PageWrapper>
  )
}

export default Collection

const PageWrapper = styled.div`
  min-height: inherit;
  background-color: var(--color-blue-02);
`
