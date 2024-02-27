import Image from "next/image"

import { ICard } from "@/types/common/gameProps"

import { getCardImage } from "@/utils/gameBoard"

const GameCard = ({ state, value }: ICard) => {
  return (
    <Image
      src={getCardImage(state, value)}
      alt={state}
      width={82}
      height={124}
      priority
    />
  )
}

export default GameCard
