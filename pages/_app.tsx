import styled from "@emotion/styled"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { CookiesProvider } from "react-cookie"
import { Provider } from "react-redux"

import BottomTab from "@/components/layouts/BottomTab"
import Header from "@/components/layouts/Header"

import {
  needBottomTab as _needBottomTab,
  needHeader as _needHeader,
} from "@/constants/tabs"

import "@/public/fonts/style.css"

import { store } from "@/redux/store/store"

import "@/styles/global.css"

export default function App({ Component, pageProps }: AppProps) {
  const [needHeader, setNeedHeader] = useState(false)
  const [needBottomTab, setNeedBottomTab] = useState(false)
  const { pathname } = useRouter()

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
    <CookiesProvider>
      <Provider store={store}>
        <AppWrapper needBottomTab={needBottomTab} needHeader={needHeader}>
          {needHeader && <Header />}
          <Component {...pageProps} />
          {needBottomTab && <BottomTab />}
        </AppWrapper>
      </Provider>
    </CookiesProvider>
  )
}

const AppWrapper = styled.section<{
  needHeader: boolean
  needBottomTab: boolean
}>`
  width: 43rem;
  scrollbar-width: none;
  min-height: 100dvh;
  padding-top: ${({ needHeader }) => (needHeader ? `7.2rem` : "0")};
  min-height: ${({ needHeader, needBottomTab }) =>
    needHeader && needBottomTab ? `calc(100dvh - 7.2rem)` : "100dvh"};
  /*height: 100vh;*/
  /*min-height: 93.2rem;*/
  /*max-height: fit-content;*/
  /*overflow-y: none;*/
  margin: auto;
  background-color: var(--color-yellow-01);
`
