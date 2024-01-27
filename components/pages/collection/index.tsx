import ItemStats from "@/components/molecules/ItemStats"
import MyStats from "@/components/molecules/MyStats"
import PublicStats from "@/components/molecules/PublicStats"
import Image from "next/image"

import useUserProfile from "@/hooks/useUser"
import styled from "@emotion/styled"

const Collection = () => {
  const { userDsId } = useUserProfile()
  // console.log("Collection", userDsId)

  return (
    <CollectionWrapper>
      {userDsId ? <MyStats /> : <PublicStats />}
      <DividerWrapper>
        <Image
          src="/assets/yellow/dotLine.svg"
          width={292}
          height={4}
          alt="state Dot Line Divider"
        />
      </DividerWrapper>
      <ItemStats />
    </CollectionWrapper>
  )
}

const CollectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  padding-bottom: 80px;
`
const DividerWrapper = styled.div`
  margin-top: 31px;
  margin-bottom: 48px;
`
export default Collection
