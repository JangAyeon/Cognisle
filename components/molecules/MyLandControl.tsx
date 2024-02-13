import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"
import styled from "@emotion/styled"
import Image from "next/image"
import Text from "@/components/atoms/typo/Text"
import { Dispatch, SetStateAction } from "react"

interface ILandControl {
  name: string
  isEdit: boolean
  handleSaveBtn: () => void
  setIsEdit: Dispatch<SetStateAction<boolean>>
}

const LandControl = ({
  name,
  isEdit,
  handleSaveBtn,
  setIsEdit,
}: ILandControl) => {
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
        text={name}
        textSize={1.6}
        borderRadius={1.5}
      />
      {isEdit && (
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
      <div onClick={() => setIsEdit(!isEdit)}>
        <Image
          src={`/assets/control/mode/${isEdit ? "edit" : "view"}.svg`}
          width={48}
          height={48}
          alt="mode Image"
        />
      </div>
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
