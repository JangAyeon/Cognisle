import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import Text from "@/components/typo/Text"
import Friend from "@/public/assets/image/friend.svg"
import styled from "@emotion/styled"

const Island = () => {
  return (
    <PageWrapper>
      <BackgroundLayout
        startColor="--gradient-yellow"
        endColor="--color-green-03"
        degree="180deg"
        height={1000}
      >
        <div>
          <Text
            text="친구의 섬 ID"
            weight="bold"
            size={24}
            color="--color-green-04"
          />
        </div>
        <Friend width={420} height={420} />
      </BackgroundLayout>
    </PageWrapper>
  )
}

export default Island

const PageWrapper = styled.div`
  background-color: var(--color-blue-01);
`
