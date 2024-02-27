import styled from "@emotion/styled"
import { useEffect, useState } from "react"

import Loading from "@/components/pages/loading"
import Main from "@/components/pages/main"

import useAuth from "@/hooks/useAuth"

import { authApi } from "@/apis/authApi"

import { setUserInfo } from "@/utils/auth"
import Timer from "@/utils/timer"

export default function Home() {
  const [loading, setLoading] = useState(true)

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
    if (!accessToken) {
      setUserProfile()
    }
  }, [])

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
