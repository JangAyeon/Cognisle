import styled from "@emotion/styled"

import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import CardGameBoard from "@/components/pages/cardgame"

const Game = () => {
  return (
    <PageWrapper>
      <BackgroundLayout
        startColor="--gradient-yellow"
        endColor="--color-pink-01"
        degree="180deg"
      >
        <CardGameBoard />
      </BackgroundLayout>
    </PageWrapper>
  )
}

export default Game

const PageWrapper = styled.div`
  min-height: calc(100dvh - 14.4rem);
  background-color: var(--color-orange-01);
  display: flex;
`
