import ItemStats from "@/components/molecules/ItemStats"
import MyStats from "@/components/molecules/MyStats"
import PublicStats from "@/components/molecules/PublicStats"

import useUserProfile from "@/hooks/useUser"

const Collection = () => {
  const { userDsId } = useUserProfile()
  console.log("Collection", userDsId)

  return (
    <div>
      {userDsId ? <MyStats /> : <PublicStats />}
      <ItemStats />
    </div>
  )
}

export default Collection
