import styled from "@emotion/styled"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

interface ITabInfo {
  link: string
  inactiveImgSrc: string
  activeImgSrc: string
  imgWidth: number
  imgHeight: number
}

const TabsInfo: ITabInfo[] = [
  {
    link: "/game",
    inactiveImgSrc: "/assets/image/yellow/game.svg",
    activeImgSrc: "assets/image/green/game.svg",
    imgWidth: 29,
    imgHeight: 39,
  },
  {
    link: "/myland",
    inactiveImgSrc: "/assets/image/yellow/myland.svg",
    activeImgSrc: "assets/image/green/myland.svg",
    imgWidth: 48,
    imgHeight: 33,
  },
  {
    link: "/island",
    inactiveImgSrc: "/assets/image/yellow/island.svg",
    activeImgSrc: "assets/image/green/island.svg",
    imgWidth: 48,
    imgHeight: 33,
  },
  {
    link: "/collection",
    inactiveImgSrc: "/assets/image/yellow/collection.svg",
    activeImgSrc: "assets/image/green/collection.svg",
    imgWidth: 35,
    imgHeight: 37,
  },
]

const BottomTab = () => {
  const { pathname } = useRouter()
  console.log(pathname)
  return (
    <TabsWrapper>
      {TabsInfo.map(
        (
          { imgHeight, imgWidth, activeImgSrc, inactiveImgSrc, link }: ITabInfo,
          idx
        ) => (
          <>
            <Link href={link} key={idx}>
              <Image
                src={link === pathname ? activeImgSrc : inactiveImgSrc}
                alt={link}
                width={imgWidth}
                height={imgHeight}
              />
            </Link>
            {idx < TabsInfo.length - 1 && <Divider />}
          </>
        )
      )}
    </TabsWrapper>
  )
}

export default BottomTab

const TabsWrapper = styled.div`
  width: 100%;
  height: 72px;
  background-color: var(--color-green-04);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const Divider = styled.div`
  height: 35px;
  width: 1px;
  background-color: var(--color-green-02);
`
