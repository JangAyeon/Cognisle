import { authApi } from "@/apis/authApi"

const Test = () => {
  const updateFirstName = async () => {
    try {
      const result = await authApi.getUpdate()
      console.log(result)
    } catch (error) {
      console.error("Error updating first name:", error)
    }
  }
  return <button onClick={updateFirstName}>qusrud</button>
}

export default Test
