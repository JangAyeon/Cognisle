import Head from 'next/head'
import Image from 'next/image'

import { supabase } from "@/apis/instance"
import { useEffect } from "react"
import LogoutBtn from "@/components/LogoutBtn"


export default function Home() {
  const getUsers = async () => {
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
  }, [])

  return (
    <div>
      Main
      <LogoutBtn />
    </div>
  )
}
