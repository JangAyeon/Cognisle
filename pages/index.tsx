import Head from "next/head"
import Image from "next/image"

import { supabase } from "@/apis/instance"
import { useEffect, useState } from "react"

import { useRouter } from "next/router"
import Loading from "@/components/pages/loading"
import Main from "@/components/pages/main"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  /*const getUsers = async () => {
    const { data, error } = await supabase.from("user").select()
    console.log(data)
  }

  const getUserProfile = async () => {
    const { data, error } = await supabase.auth.getUser()
    console.log("getUserProfile", data)
  }

  const getSessionInfo = async () => {
    const { data, error } = await supabase.auth.getSession()
    console.log("getSesssion", data)
  }
  useEffect(() => {
    getUsers()
    getUserProfile()
    getSessionInfo()
  }, [])*/

  useEffect(() => {
    let timer = setTimeout(() => {
      //setLoading(false)
    }, 2000)

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
