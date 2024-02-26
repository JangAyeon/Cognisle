import Image from "next/image"

import { ICard } from "@/types/common/gameProps"

const getCardSrc = (state: ICard["state"], value: number) => {
  if (state === "hidden") {
    return "/assets/card/hidden.png"
  } else {
    return `/assets/card/reveal/item_${value}.png`
  }
}

const GameCard = ({ state, value }: ICard) => {
  return (
    <Image src={getCardSrc(state, value)} alt={state} width={82} height={124} />
  )
}

export default GameCard
