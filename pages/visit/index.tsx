import TextInput from "@/components/atoms/input/TextInput"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import Text from "@/components/typo/Text"
import { useInput } from "@/hooks/useInput"
import Friend from "@/public/assets/green/friend.svg"
import styled from "@emotion/styled"
import { FormEvent } from "react"

const Island = () => {
  const [friendId, onChangeFriendId, setFriendId] = useInput("")

  const handleFriendSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(friendId)
  }
  return (
    <PageWrapper>
      <BackgroundLayout
        startColor="--gradient-yellow"
        endColor="--color-green-03"
        degree="180deg"
      >
        <div>
          <Text
            text="친구의 섬 ID"
            weight="bold"
            size={24}
            color="--color-green-04"
          />
          <form onSubmit={handleFriendSubmit}>
            <TextInput
              value={friendId}
              onChange={onChangeFriendId}
              placeholder="친구 아이디"
              type="text"
              name="friendId"
              color="--color-green-04"
              backgroundColor="--color-yellow-01"
              width={280}
              height={40}
              size={16}
              padding={16}
              imgSrc="/assets/image/search.svg"
              imgHeigth={21}
              imgWidth={21}
              btnType="submit"
            />
          </form>
        </div>
        <Friend width={420} height={420} />
      </BackgroundLayout>
    </PageWrapper>
  )
}

export default Island

const PageWrapper = styled.div`
  background-color: var(--color-blue-01);
  min-height: inherit;
`
