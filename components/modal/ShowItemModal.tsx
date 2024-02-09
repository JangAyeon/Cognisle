import { useEffect, useState } from "react"
import Modal from "@/components/modal/Modal"
import styled from "@emotion/styled"

interface IItemModal {
  itemId: number | string
  isOpen: boolean
  onClose: () => void
  pointColor: string
}

const Loading = () => {
  return <div>I am loading</div>
}

const ShowItemModal = ({ itemId, isOpen, onClose, pointColor }: IItemModal) => {
  // const [loading, setLoading] = useState<boolean>(true)
  // const [data, setData] = useState<ItemProps>()

  return (
    <Modal.Root isOpen={isOpen} onClose={onClose}>
      <Modal.Content width={30.0} height={48.0} pointColor={pointColor}>
        <Modal.CloseButton />
        <Modal.Body>
          <Container>My id: {itemId}</Container>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default ShowItemModal

const Container = styled.div`
  background-color: var(--color-yellow-01);
`
