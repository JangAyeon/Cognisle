import Head from "next/head"
import Image from "next/image"

import { supabase } from "@/apis/instance"
import { useEffect } from "react"
import LogoutBtn from "@/components/LogoutBtn"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import BorderPointBtn from "@/components/button/BottomPointBtn"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  const getUsers = async () => {
    const { data, error } = await supabase.from("user").select()
    console.log(data)
  }

  const getUserProfile = async () => {
    const { data, error } = await supabase.auth.getUser()
    console.log("getUserProfile", data)
  }

  const getSessionInfo = async () => {
    const { data, error } = await supabase.auth.getSession()
    console.log("getSesssion", data)
  }
  useEffect(() => {
    getUsers()
    getUserProfile()
    getSessionInfo()
  }, [])

  const handleMenuBtnClick = (url: string) => {
    console.log("btn clicked", url)
    router.push(url)
  }

  const Buttons = [
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
      imgSrc: "/assets/image/yellow/game.svg",
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
      imgSrc: "/assets/image/yellow/myland.svg",
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
      link: "/island",
      imgSrc: "/assets/image/yellow/island.svg",
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
      imgSrc: "/assets/image/yellow/collection.svg",
      imgWidth: 35,
      imgHeight: 37,
    },
  ]

  return (
    <BackgroundLayout
      imgSrc={"/assets/image/background/island.svg"}
      startColor="--gradient-yellow"
      endColor="--color-pink-01"
      degree="180deg"
      imgWidth={430}
      height={1100}
    >
      <BorderPointBtn
        width={200}
        height={48}
        pointHeight={50}
        pointWidth={20}
        textSize={16}
        mainColor="--color-pink-01"
        pointColor="--color-green-04"
        textColor="--color-yellow-01"
        text="이름이름닉네임"
        borderRadius={15}
      />
      {Buttons.map(
        ({
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
        }) => (
          <BorderPointBtn
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
      <LogoutBtn />
    </BackgroundLayout>
  )
}
