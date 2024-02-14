import styled from "@emotion/styled"

import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import Island from "@/components/pages/island"

import { BACKGROUND_COLOR } from "@/constants/island"

import useIsland from "@/hooks/useIsland"

const Myland = () => {
  const { islandType, islandItemLoc } = useIsland()
  // console.log(islandBackground, islandItems)
  return (
    <PageWrapper>
      {" "}
      <BackgroundLayout
        startColor={BACKGROUND_COLOR[islandType].startColor}
        endColor={BACKGROUND_COLOR[islandType].endColor}
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
  display: flex;
`
