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
  useEffect(() => {
    getUsers()
  }, [])

  return <>Main</>
}
