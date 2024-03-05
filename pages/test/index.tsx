import styled from "@emotion/styled"
import { useState } from "react"

import { authApi } from "@/apis/authApi"

const Test = () => {
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const updatePassword = async () => {
    console.log(password, userId)
    try {
      const result = await authApi.changePassword(userId, password)
      console.log(result)
    } catch (error) {
      console.error("Error updating first name:", error)
    }
  }
  return (
    <>
      <p> 회원 아이디</p>
      <Input onChange={(e) => setUserId(e.currentTarget.value)} />
      <p>변경 비밀 번호</p>
      <Input onChange={(e) => setPassword(e.currentTarget.value)} />
      <button onClick={updatePassword}> 비밀번호 번경</button>
    </>
  )
}

export default Test

const Input = styled.input`
  background-color: white;
`
