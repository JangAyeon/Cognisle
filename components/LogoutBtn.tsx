import { authApi } from "@/apis/authApi"

const LogoutBtn = () => {
  const handleLogout = async () => {

    try {
      const { error } = await authApi.logout()
      console.log("로그아웃")
    } catch (error) {
      alert(error)
    }
  }

  return <button onClick={handleLogout}>로그아웃</button>
}

export default LogoutBtn
