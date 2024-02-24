import Image from "next/image"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

import ShowItemModal from "@/components/modal/ShowItemModal"

import { ICard, IGameInfo } from "@/types/common/gameProps"

type TCardSrc = {
  [id in ICard["state"]]: string
}

const getCardSrc = (state: ICard["state"], value: number) => {
  if (state === "hidden") {
    return "/assets/card/hidden.png"
  } else {
    return `/assets/item/item_${value}.svg`
  }
}

const GameCard = ({ state, value }: ICard) => {
  return (
    <Image src={getCardSrc(state, value)} alt={state} width={82} height={124} />
  )
}

export default GameCard
