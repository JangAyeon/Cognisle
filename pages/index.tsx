import styled from "@emotion/styled"
import { useEffect, useState } from "react"

import Loading from "@/components/pages/loading"
import Main from "@/components/pages/main"

import Timer from "@/utils/timer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = Timer(setLoading(false), 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {" "}
      <PageWrapper>{loading ? <Loading /> : <Main />}</PageWrapper>
    </>
  )
}

const PageWrapper = styled.div`
  min-height: inherit;
`
