import BottomTab from "@/components/layouts/BottomTab"
import Header from "@/components/layouts/Header"
import styled from "@emotion/styled"
import Head from "next/head"
import { useRouter } from "next/router"
import { ReactElement } from "react"

const needBottomTab = ["/game", "/myland", "/island", "/collection"]
const needHeader = ["/game", "/myland", "/island", "/collection"]

const AppLayout = ({ children }: { children: ReactElement }) => {
  const { pathname } = useRouter()
  return (
    <>
      <Head>
        <title>Cognisle</title>
        <meta name="description" content="Cognisle" />
      </Head>
      <AppLayoutWrapper>
        {needHeader.includes(pathname) && <Header />}
        {children}
        {needBottomTab.includes(pathname) && <BottomTab />}
      </AppLayoutWrapper>
    </>
  )
}

export default AppLayout

const AppLayoutWrapper = styled.section`
  max-width: 430px;
  width: 100%;
  min-height: 100vh;
  max-height: fit-content;
  margin: auto;
`
