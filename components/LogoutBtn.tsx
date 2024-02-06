import { authApi } from "@/apis/authApi"
import { removeUserInfo } from "@/utils/auth"
import styled from "@emotion/styled"
import { useRouter } from "next/router"

const LogoutBtn = () => {
  const router = useRouter()
  const handleLogout = async () => {
    try {
      const { error } = await authApi.logout()
      removeUserInfo()
      alert("로그아웃")
      router.reload()
    } catch (error) {
      alert(error)
    }
  }

  return <Button onClick={handleLogout}>로그아웃 logout</Button>
}

export default LogoutBtn

const Button = styled.button`
  font-weight: bold;
  font-size: 2.4px;
`
