import styled from "@emotion/styled"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect } from "react"

import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"
import Text from "@/components/atoms/typo/Text"
import AuthModal from "@/components/modal/AuthModal"

import useCopy from "@/hooks/useCopy"
import useIsland from "@/hooks/useIsland"
import useStateModal from "@/hooks/useStateModal"
import useUserProfile from "@/hooks/useUser"

import islandApi from "@/apis/island"

import { setIslandIsEdit } from "@/utils/island"

const LandControl = ({
  isOwner,
  name = "",
}: {
  isOwner: boolean
  name: string
}) => {
  const { isCopy, onCopy } = useCopy()
  const { islandType, islandItemLoc, islandIsEdit } = useIsland()
  const { userName, userEmail } = useUserProfile()
  const { state, text, isOpen, setStateModal, closeModal, setIsOpen } =
    useStateModal()
  const router = useRouter()

  const handleSaveBtn = async () => {
    const body = {
      background: islandType,
      ...islandItemLoc,
    }

    const { data, error } = await islandApi.saveIsland(userEmail, body)

    if (!error) {
      setStateModal({
        state: "success",
        text: "저장 성공했습니다",
        isOpen: true,
      })
    }
  }

  const handleEmailCopy = async () => {
    if (userEmail) {
      onCopy(userEmail)
      setStateModal({
        state: "success",
        text: `복사된 초대 코드를 친구에게 전달해 섬을 자랑해봐요`,
        isOpen: true,
      })
    }
  }

  useEffect(() => {
    // 초대 결과로 모달 열린게 아닌 편집에서 완료 저장 누른 경우에만 리로드
    if (isOpen && !isCopy) {
      router.reload()
    }
  }, [isOpen])
  return (
    <TopMenu>
      {" "}
      <BorderPointBtn
        width={20}
        height={4.8}
        pointHeight={55}
        pointWidth={10}
        mainColor={"--color-yellow-01"}
        pointColor={"--color-green-04"}
        textColor={"--color-green-04"}
        text={isOwner ? userName : name}
        textSize={1.6}
        borderRadius={1.5}
      />
      {text && (
        <AuthModal
          state={state}
          text={text}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
      {isOwner && (
        <EditWrapper>
          {islandIsEdit && (
            <ModeButton onClick={handleSaveBtn}>
              {" "}
              <Text
                size={1.6}
                weight="bold"
                color={"--color-green-04"}
                text="저장"
              />
            </ModeButton>
          )}
          <OpenerWrapper
            onClick={() => {
              console.log("click")
              setIslandIsEdit(!islandIsEdit)
            }}
          >
            <Image
              src={`/assets/control/mode/${islandIsEdit ? "edit" : "view"}.svg`}
              width={48}
              height={48}
              alt="mode Image"
            />
          </OpenerWrapper>
          {userEmail && (
            <ModeButton onClick={handleEmailCopy}>
              <Image
                src={`/assets/control/mode/invit.svg`}
                width={35}
                height={38}
                alt="mode Image"
              />
            </ModeButton>
          )}
        </EditWrapper>
      )}
    </TopMenu>
  )
}

export default LandControl

const TopMenu = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 3.2rem;
  width: 100%;
  justify-content: space-between;
  position: relative;
  top: 2.4rem;
`

const ModeButton = styled.button`
  background-color: var(--color-yellow-01);
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const EditWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const OpenerWrapper = styled.div`
  margin: 0 0.8rem;
`
