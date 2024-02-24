import styled from "@emotion/styled"
import Head from "next/head"
import { useRouter } from "next/router"
import { ReactElement, useEffect } from "react"

import BottomTab from "@/components/layouts/BottomTab"
import Header from "@/components/layouts/Header"

import needBottomTab from "@/constants/bottomTab"
import needHeader from "@/constants/header"

import useAuth from "@/hooks/useAuth"

import { authApi } from "@/apis/authApi"

import { setUserInfo } from "@/utils/auth"

const AppLayout = ({ children }: { children: ReactElement }) => {
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

  return (
    <>
      <Head>
        <title>Cognisle</title>
        <meta name="description" content="Cognisle" />
      </Head>
      <AppLayoutWrapper>
        {needHeader.includes(pathname) && <Header />}
        <Container>{children}</Container>

        {needBottomTab.includes(pathname) && <BottomTab />}
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

const Container = styled.div`
  padding-top: 7.2rem;
`
