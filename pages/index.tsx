import { supabase } from "@/apis/instance"
import { useEffect, useState } from "react"

import Loading from "@/components/pages/loading"
import Main from "@/components/pages/main"

export default function Home() {
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    const { data, error } = await supabase.from("user").select()
    // console.log(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false)
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
