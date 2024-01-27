import "@/styles/global.css"
import "@/public/fonts/style.css"
import type { AppProps } from "next/app"
import { CookiesProvider } from "react-cookie"
import { Provider } from "react-redux"
import { store } from "@/redux/store/store"
import AppLayout from "@/components/layouts/AppLayout"

export default function App({ Component, pageProps }: AppProps) {
  console.log("app")
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
