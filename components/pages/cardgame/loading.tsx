import { supabase } from "@/apis/instance"
import GameResultModal from "@/components/modal/GameResultModal"
import useUserProfile from "@/hooks/useUser"
import { GameLoadingProps, IGameResult } from "@/types/common/gameProps"
import styled from "@emotion/styled"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

interface IGameLoading {
  type: GameLoadingProps
  gameResult: IGameResult
}

const createData = (idArray: IGameLoading["gameResult"]["items"]) => {
  const data: { [key: string]: boolean } = {}
  for (let { id } of idArray) {
    data[`exist_${id}`] = true
  }

  return data
}

const Loading = ({ type, gameResult }: IGameLoading) => {
  // console.log(type)
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { userEmail, userSbId } = useUserProfile()

  const handleModalOpen = () => {
    // console.log("open")

    setIsModalOpen(true)
  }

  const postGameResult = async () => {
    // console.log("post", userSbId)
    const data = createData(gameResult.items)
    await supabase
      .from("itemStatus")

      .upsert(
        {
          userId: userSbId,
          ...data,
        },
        { onConflict: "userId" },
      )
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    postGameResult()
    router.replace("/")
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
          onClose={handleModalClose}
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
