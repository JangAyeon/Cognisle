import BackgroundLayout from "@/components/layouts/BackgroundLayout"

import styled from "@emotion/styled"

import Island from "@/components/pages/island"
import useIsland from "@/hooks/useIsland"
import islandBackground_ from "@/constants/islandBackground"

const Myland = () => {
  const { islandBackground, islandItems } = useIsland()
  // console.log(islandBackground, islandItems)
  return (
    <PageWrapper>
      {" "}
      <BackgroundLayout
        startColor={islandBackground_[islandBackground].startColor}
        endColor={islandBackground_[islandBackground].endColor}
        degree="180deg"
      >
        <Island />
      </BackgroundLayout>
    </PageWrapper>
  )
}

export default Myland

const PageWrapper = styled.div`
  min-height: inherit;
  background-color: var(--color-blue-01);
`
