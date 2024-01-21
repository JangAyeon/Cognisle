import { authApi } from "@/apis/authApi"
import { removeUserInfo } from "@/utils/auth"
import { useRouter } from "next/router"

const LogoutBtn = () => {
  const router = useRouter()
  const handleLogout = async () => {
    try {
      const { error } = await authApi.logout()
      removeUserInfo()
      alert("로그아웃")
      router.replace("/")
    } catch (error) {
      alert(error)
    }
  }

  return <button onClick={handleLogout}>로그아웃</button>
}

export default LogoutBtn
