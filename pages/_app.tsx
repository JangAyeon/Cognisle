import "@/styles/global.css";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie"
import { Provider } from "react-redux"
import { store } from "@/redux/store/store"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </CookiesProvider>
  )
}
