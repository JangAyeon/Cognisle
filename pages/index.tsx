import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { supabase } from "@/apis/instance"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

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

  return <div>Main</div>
}
