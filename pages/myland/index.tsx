import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import styled from "@emotion/styled"

const Myland = () => {
  return (
    <PageWrapper>
      {" "}
      <BackgroundLayout
        startColor="--gradient-yellow"
        endColor="--color-green-03"
        degree="180deg"
      >
        <div>dlada</div>
      </BackgroundLayout>
    </PageWrapper>
  )
}

export default Myland

const PageWrapper = styled.div`
  min-height: inherit;
  background-color: var(--color-blue-01);
`
