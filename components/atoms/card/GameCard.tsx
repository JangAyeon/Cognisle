import Image from "next/image"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

import ShowItemModal from "@/components/modal/ShowItemModal"

import { ICard, IGameInfo } from "@/types/common/gameProps"

type TCardSrc = {
  [id in ICard["state"]]: string
}

const CardSrc: TCardSrc = {
  hidden: "/assets/card/hidden.png",
  revealed: "/assets/card/revealed.png",
  selected: "/assets/card/selected.png",
}

const GameCard = ({ state, value }: ICard) => {
  return (
    <div>
      <Image src={CardSrc[state]} alt={state} width={82} height={124} />
    </div>
  )
}

export default GameCard
