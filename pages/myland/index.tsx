import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import useUserProfile from "@/hooks/useUser"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Myland = () => {
  const { userName } = useUserProfile()
  const {
    query: { mode, id },
  } = useRouter()
  const [isEdit, setIsEdit] = useState(false)
  useEffect(() => {
    if (mode === "view") {
      setIsEdit(false)
    } else {
      setIsEdit(true)
    }
  }, [mode])
  console.log(mode, id)
  return (
    <PageWrapper>
      {" "}
      <BackgroundLayout
        startColor="--gradient-yellow"
        endColor="--color-green-03"
        degree="180deg"
      >
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
          {isEdit ? <div>수정중</div> : <div>수정 불가능</div>}
        </TopMenu>
      </BackgroundLayout>
    </PageWrapper>
  )
}

export default Myland

const PageWrapper = styled.div`
  min-height: inherit;
  background-color: var(--color-blue-01);
`

const TopMenu = styled.div`
  margin-top: 7.2rem;
  display: flex;
  flex-direction: row;
`
