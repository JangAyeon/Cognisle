import TextInput from "@/components/atoms/input/TextInput"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import Text from "@/components/atoms/typo/Text"
import { useInput } from "@/hooks/useInput"
import Friend from "@/public/assets/green/friend.svg"
import Squiggly from "@/public/assets/green/squiggly.svg"
import styled from "@emotion/styled"
import { FormEvent } from "react"

const Island = () => {
  const [friendId, onChangeFriendId, setFriendId] = useInput("")

  const handleFriendSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log(friendId)
  }
  return (
    <PageWrapper>
      <BackgroundLayout
        imgSrc={"/assets/background/bubble.svg"}
        imgWidth={43}
        imgHeight={84.9}
        startColor="--gradient-yellow"
        endColor="--color-green-03"
        degree="180deg"
      >
        <ContentContainer>
          <FormContainer>
            <TitleWrapper>
              <Text
                text="친구의 섬 ID"
                weight="bold"
                size={2.4}
                color="--color-green-04"
              />
              <Squiggly width={51} height={21} />
            </TitleWrapper>

            <form onSubmit={handleFriendSubmit}>
              <TextInput
                value={friendId}
                onChange={onChangeFriendId}
                placeholder="친구 아이디"
                type="text"
                name="friendId"
                color="--color-green-04"
                backgroundColor="--color-yellow-01"
                width={28.0}
                height={4.0}
                fontSize={1.6}
                padding={1.6}
                imgSrc="/assets/image/search.svg"
                imgHeigth={21}
                imgWidth={21}
                btnType="submit"
              />
            </form>
          </FormContainer>
          <ImageWrapper>
            <Friend width={280} height={381} />
          </ImageWrapper>
        </ContentContainer>
      </BackgroundLayout>
    </PageWrapper>
  )
}

export default Island

const PageWrapper = styled.div`
  background-color: var(--color-blue-01);
  min-height: inherit;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8.4rem;
  min-height: inherit;
  height: inherit;
  padding-top: 7.2rem;
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
  padding-top: 18rem;
`

const ImageWrapper = styled.div`
  padding-bottom: 2.8rem;
`
