import GameResultModal from "@/components/modal/GameResultModal"
import { GameLoadingProps, IGameResult } from "@/types/common/gameProps"
import styled from "@emotion/styled"
import Image from "next/image"
import { useEffect, useState } from "react"

interface IGameLoading {
  type: GameLoadingProps
  gameResult: IGameResult
}

const Loading = ({ type, gameResult }: IGameLoading) => {
  console.log(type)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    // console.log("open")

    setIsModalOpen(true)
  }
  useEffect(() => {
    if (type === "result") {
      handleModalOpen()
    }
  }, [type])
  return (
    <LoadingWrapper>
      {type === "start" && (
        <Image
          src="/assets/green/friend.svg"
          width={292}
          height={300}
          alt="state Dot Line Divider"
        />
      )}
      {type === "end" && (
        <Image
          src="/assets/grey/circle.svg"
          width={292}
          height={300}
          alt="state Dot Line Divider"
        />
      )}
      {type === "result" && (
        <GameResultModal
          gameResult={gameResult}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </LoadingWrapper>
  )
}

export default Loading

const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 43rem;
  height: 100%;
  background-color: rgba(254, 195, 97, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;
`
