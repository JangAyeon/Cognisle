import Head from "next/head"
import Image from "next/image"

import { supabase } from "@/apis/instance"
import { useEffect, useState } from "react"

import { useRouter } from "next/router"
import Loading from "@/components/pages/loading"
import Main from "@/components/pages/main"
import { getCookie } from "@/utils/cookie"
import { GetServerSideProps } from "next"
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs"
import { setUserInfo } from "@/utils/auth"
import { IAuthSBInfo } from "@/types/common/authProps"

export default function Home({ user, session }: IAuthSBInfo) {
  console.log("Home", user, session)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const refreshToken = getCookie("refreshToken")
  const getUsers = async () => {
    const { data, error } = await supabase.from("user").select()
    console.log(data)
  }

  useEffect(() => {
    getUsers()
    if (user && session) {
      setUserInfo({ user, session })
    }
  }, [])

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Main />
        </>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createPagesServerClient(ctx)
  // Check if we have a user
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (user && session) {
    return {
      props: {
        user,
        session,
      },
    }
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }
}
