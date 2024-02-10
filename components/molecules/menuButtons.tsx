import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"
import styled from "@emotion/styled"

const defaultStyle = {
  width: 10.8,
  height: 10.8,
  pointHeight: 2,
  pointWidth: 2,
  textSize: 1.4,
  borderRadius: 1.6,
  mainColor: "--color-green-04",
  pointColor: "--color-pink-01",
  textColor: "--color-yellow-01",
}

const MenuButtonsInfo = [
  {
    text: "카드 게임",

    link: "/game",
    imgSrc: "/assets/yellow/game.svg",
    imgWidth: 29,
    imgHeight: 39,
    ...defaultStyle,
  },
  {
    text: "나의 섬",

    link: "/island?mode=view",
    imgSrc: "/assets/yellow/island.svg",
    imgWidth: 48,
    imgHeight: 33,
    ...defaultStyle,
  },
  {
    text: "놀러가기",

    link: "/visit",
    imgSrc: "/assets/yellow/visit.svg",
    imgWidth: 48,
    imgHeight: 33,
    ...defaultStyle,
  },
  {
    text: "모아보기",

    link: "/collection",
    imgSrc: "/assets/yellow/collection.svg",
    imgWidth: 35,
    imgHeight: 37,
    ...defaultStyle,
  },
]

const MenuButtons = () => {
  return (
    <MenuBtnContianer>
      {MenuButtonsInfo.map(
        (
          {
            width,
            height,
            pointHeight,
            pointWidth,
            mainColor,
            pointColor,
            textColor,
            text,
            textSize,
            borderRadius,
            link,
            imgSrc,
            imgWidth,
            imgHeight,
          },
          idx
        ) => (
          <BorderPointBtn
            key={idx}
            width={width}
            height={height}
            pointHeight={pointHeight}
            pointWidth={pointWidth}
            mainColor={mainColor}
            pointColor={pointColor}
            textColor={textColor}
            text={text}
            textSize={textSize}
            borderRadius={borderRadius}
            link={link}
            imgSrc={imgSrc}
            imgWidth={imgWidth}
            imgHeight={imgHeight}
          />
        )
      )}
    </MenuBtnContianer>
  )
}

export default MenuButtons

const MenuBtnContianer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  gap: 2.8rem;
`
