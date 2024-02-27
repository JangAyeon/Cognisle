import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { CookiesProvider } from "react-cookie"
import { Provider } from "react-redux"

import AppLayout from "@/components/layouts/AppLayout"

import "@/public/fonts/style.css"

import { store } from "@/redux/store/store"

import "@/styles/global.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </CookiesProvider>
  )
}
