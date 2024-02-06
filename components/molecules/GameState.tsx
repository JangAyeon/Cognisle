import useGame, { IGameInfo } from "@/hooks/useGame"

const GameState = (/*{
  score,
  time,
  moves,
}: Pick<IGameInfo, "moves" | "score" | "time">*/) => {
  const { score, time, moves } = useGame()
  return (
    <>
      {score} {time} {moves}
    </>
  )
}

export default GameState
