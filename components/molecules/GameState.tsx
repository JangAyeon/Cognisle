import { IGameInfo } from "@/hooks/useGame"

const GameState = ({
  score,
  time,
  moves,
}: Pick<IGameInfo, "moves" | "score" | "time">) => {
  return (
    <>
      {score} {time} {moves}
    </>
  )
}

export default GameState
