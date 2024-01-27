import MyStats from "@/components/molecules/MyStats"
import PublicStats from "@/components/molecules/PublicStats"

import useUserProfile from "@/hooks/useUser"

const Collection = () => {
  const { userDsId } = useUserProfile()
  console.log("Collection", userDsId)

  return (
    <div>
      {userDsId ? <MyStats /> : <PublicStats />}
      Collection in component Page
    </div>
  )
}

export default Collection
