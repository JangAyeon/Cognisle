import { GameLoadingProps } from "@/types/common/gameProps"
import styled from "@emotion/styled"
import Image from "next/image"

interface IGameLoading {
  type: GameLoadingProps
}

const Loading = ({ type }: IGameLoading) => {
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
