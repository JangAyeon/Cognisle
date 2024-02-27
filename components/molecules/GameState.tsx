import styled from "@emotion/styled"
import Image from "next/image"

import Text from "@/components/atoms/typo/Text"

import { IGameInfo } from "@/types/common/gameProps"

const GameState = ({
  score,
  time,
  moves,
}: Pick<IGameInfo, "moves" | "score" | "time">) => {
  // console.log(score, time, moves)
  return (
    <StateWrapper>
      <Image
        src={"/assets/yellow/card.svg"}
        alt="game card"
        height={35}
        width={26}
        style={{ marginRight: "1rem" }}
      />
      <Text
        text={`획득한 아이템 갯수: ${score}`}
        size={1.6}
        weight="bold"
        color={"--color-yellow-02"}
      />
    </StateWrapper>
  )
}

export default GameState

const StateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 1.5rem;
`
