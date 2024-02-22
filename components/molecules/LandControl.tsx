import styled from "@emotion/styled"
import Image from "next/image"
import router, { useRouter } from "next/router"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"
import Text from "@/components/atoms/typo/Text"

import useIsland from "@/hooks/useIsland"
import useUserProfile from "@/hooks/useUser"

import islandApi from "@/apis/island"

import { setIslandIsEdit } from "@/utils/island"

const LandControl = ({ isOwner }: { isOwner: boolean }) => {
  const { islandType, islandItemLoc, islandIsEdit } = useIsland()
  const { userName, userSbId, userEmail } = useUserProfile()

  const router = useRouter()

  const handleSaveBtn = async () => {
    const body = {
      background: islandType,
      ...islandItemLoc,
    }

    const { data, error } = await islandApi.saveIsland(userEmail, body)

    if (!error) {
      alert("저장 성공했습니다.")
      router.reload()
    }
  }

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
        text={userName}
        textSize={1.6}
        borderRadius={1.5}
      />
      {isOwner && (
        <>
          {islandIsEdit && (
            <SaveButton onClick={handleSaveBtn}>
              {" "}
              <Text
                size={1.6}
                weight="bold"
                color={"--color-green-04"}
                text="저장"
              />
            </SaveButton>
          )}
          <div onClick={() => setIslandIsEdit(!islandIsEdit)}>
            <Image
              src={`/assets/control/mode/${islandIsEdit ? "edit" : "view"}.svg`}
              width={48}
              height={48}
              alt="mode Image"
            />
          </div>
        </>
      )}
    </TopMenu>
  )
}

export default LandControl

const TopMenu = styled.div`
  margin-top: 7.2rem;
  display: flex;
  flex-direction: row;
`

const SaveButton = styled.button`
  background-color: var(--color-yellow-01);
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
`
