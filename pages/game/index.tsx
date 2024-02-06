import WaitGameStart from "@/components/molecules/WaitGameStart"
import CardGameBoard from "@/components/pages/cardgame"
import Timer from "@/utils/timer"
import { useEffect, useState } from "react"

const Game = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = Timer(setLoading(false), 10000)

    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <>
      <WaitGameStart />
      <CardGameBoard />
    </>
  )
}

export default Game
