import styled from "@emotion/styled"
import Head from "next/head"
import { useRouter } from "next/router"
import { ReactElement, useEffect, useState } from "react"

import BottomTab from "@/components/layouts/BottomTab"
import Header from "@/components/layouts/Header"

import {
  needBottomTab as _needBottomTab,
  needHeader as _needHeader,
} from "@/constants/tabs"

import useAuth from "@/hooks/useAuth"

import { authApi } from "@/apis/authApi"

import { setUserInfo } from "@/utils/auth"

const AppLayout = ({ children }: { children: ReactElement }) => {
  const [needHeader, setNeedHeader] = useState(false)
  const [needBottomTab, setNeedBottomTab] = useState(false)
  const { pathname } = useRouter()

  const { accessToken } = useAuth()
  const setUserProfile = async () => {
    const {
      data: { user },
    } = await authApi.getUserProfile()
    const {
      data: { session },
    } = await authApi.getSession()
    if (session && user) {
      setUserInfo({ user, session })
    } else {
    }
  }

  useEffect(() => {
    if (!accessToken && !pathname.includes("/auth")) {
      setUserProfile()
    }
  }, [children])

  useEffect(() => {
    if (_needHeader.includes(pathname)) {
      setNeedHeader(true)
    } else {
      setNeedHeader(false)
    }
    if (_needBottomTab.includes(pathname)) {
      setNeedBottomTab(true)
    } else {
      setNeedBottomTab(false)
    }
  }, [pathname])

  return (
    <>
      <Head>
        <title>Cognisle</title>
        <meta name="description" content="Cognisle" />
      </Head>
      <AppLayoutWrapper>
        {needHeader && <Header />}
        <Container needHeader={needHeader} needBottomTab={needBottomTab}>
          {children}
        </Container>

        {needBottomTab && <BottomTab />}
      </AppLayoutWrapper>
    </>
  )
}

export default AppLayout

const AppLayoutWrapper = styled.section`
  width: 43rem;
  scrollbar-width: none;

  /*height: 100vh;*/
  /*min-height: 93.2rem;*/
  /*max-height: fit-content;*/
  /*overflow-y: none;*/
  margin: auto;
  background-color: var(--color-yellow-01);
`

const Container = styled.div<{ needHeader: boolean; needBottomTab: boolean }>`
  padding-top: ${({ needHeader }) => (needHeader ? `7.2rem` : "0")};
  min-height: ${({ needHeader, needBottomTab }) =>
    needHeader && needBottomTab ? `calc(100dvh - 7.2rem)` : "100dvh"};
`
