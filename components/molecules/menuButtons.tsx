import BorderPointBtn from "@/components/atoms/button/BottomPointBtn"
import styled from "@emotion/styled"

const MenuButtonsInfo = [
  {
    width: 108,
    height: 108,
    pointHeight: 20,
    pointWidth: 20,
    mainColor: "--color-green-04",
    pointColor: "--color-pink-01",
    textColor: "--color-yellow-01",
    text: "카드 게임",
    textSize: 14,
    borderRadius: 16,
    link: "/game",
    imgSrc: "/assets/yellow/game.svg",
    imgWidth: 29,
    imgHeight: 39,
  },
  {
    width: 108,
    height: 108,
    pointHeight: 20,
    pointWidth: 20,
    mainColor: "--color-green-04",
    pointColor: "--color-pink-01",
    textColor: "--color-yellow-01",
    text: "나의 섬",
    textSize: 14,
    borderRadius: 16,
    link: "/myland",
    imgSrc: "/assets/yellow/myland.svg",
    imgWidth: 48,
    imgHeight: 33,
  },
  {
    width: 108,
    height: 108,
    pointHeight: 20,
    pointWidth: 20,
    mainColor: "--color-green-04",
    pointColor: "--color-pink-01",
    textColor: "--color-yellow-01",
    text: "놀러가기",
    textSize: 14,
    borderRadius: 16,
    link: "/visit",
    imgSrc: "/assets/yellow/visit.svg",
    imgWidth: 48,
    imgHeight: 33,
  },
  {
    width: 108,
    height: 108,
    pointHeight: 20,
    pointWidth: 20,
    mainColor: "--color-green-04",
    pointColor: "--color-pink-01",
    textColor: "--color-yellow-01",
    text: "모아보기",
    textSize: 14,
    borderRadius: 16,
    link: "/collection",
    imgSrc: "/assets/yellow/collection.svg",
    imgWidth: 35,
    imgHeight: 37,
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
  gap: 28px;
`
