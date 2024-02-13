import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import WaitGameStart from "@/components/molecules/WaitGameStart"
import CardGameBoard from "@/components/pages/cardgame"
import Timer from "@/utils/timer"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"

const Game = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const timer = Timer(setLoading(false), 10000)

    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <PageWrapper>
      <BackgroundLayout
        startColor="--gradient-yellow"
        endColor="--color-pink-01"
        degree="180deg"
      >
        {loading && <WaitGameStart />}
        <CardGameBoard />
      </BackgroundLayout>
    </PageWrapper>
  )
}

export default Game

const PageWrapper = styled.div`
  min-height: inherit;
  background-color: var(--color-orange-01);
  display: flex;
`
