import styled from "@emotion/styled"
import Head from "next/head"
import { ReactElement } from "react"

const AppLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Head>
        <title>Cognisle</title>
        <meta name="description" content="Cognisle" />
        <meta name="viewport" content="width=device-width, initial scale=1" />
      </Head>
      <AppLayoutWrapper>
        <main>{children}</main>
      </AppLayoutWrapper>
    </>
  )
}

export default AppLayout

const AppLayoutWrapper = styled.section`
  max-width: 375px;
  width: 100%;
  min-height: 100vh;
  max-height: fit-content;
  margin: auto;
  background-color: red;
`
