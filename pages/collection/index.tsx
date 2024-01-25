import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import styled from "@emotion/styled"

const Collection = () => {
  return (
    <PageWrapper>
      <BackgroundLayout
        startColor="--gradient-yellow"
        endColor="--color-orange-02"
        degree="180deg"
      >
        Collection
      </BackgroundLayout>
    </PageWrapper>
  )
}

export default Collection

const PageWrapper = styled.div`
  min-height: inherit;
  background-color: var(--color-blue-02);
`
