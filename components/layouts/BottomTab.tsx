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
    inactiveImgSrc: "/assets/yellow/game.svg",
    activeImgSrc: "assets/green/game.svg",
    imgWidth: 29,
    imgHeight: 39,
  },
  {
    link: "/myland",
    inactiveImgSrc: "/assets/yellow/myland.svg",
    activeImgSrc: "/assets/green/myland.svg",
    imgWidth: 48,
    imgHeight: 33,
  },
  {
    link: "/visit",
    inactiveImgSrc: "/assets/yellow/visit.svg",
    activeImgSrc: "/assets/green/visit.svg",
    imgWidth: 48,
    imgHeight: 33,
  },
  {
    link: "/collection",
    inactiveImgSrc: "/assets/yellow/collection.svg",
    activeImgSrc: "/assets/green/collection.svg",
    imgWidth: 35,
    imgHeight: 37,
  },
]

const BottomTab = () => {
  const { pathname } = useRouter()
  // console.log(pathname)
  return (
    <TabsWrapper>
      {TabsInfo.map(
        (
          { imgHeight, imgWidth, activeImgSrc, inactiveImgSrc, link }: ITabInfo,
          idx
        ) => (
          <>
            <Link href={link}>
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
  position: fixed;
  bottom: 0;
  width: inherit;
  height: 7.2rem;
  background-color: var(--color-green-04);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

const Divider = styled.div`
  height: 3.5rem;
  width: 0.1rem;
  background-color: var(--color-green-02);
`
