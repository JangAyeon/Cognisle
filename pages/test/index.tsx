import ShowItemModal from "@/components/modal/ShowItemModal"
import { useState } from "react"

const Test = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    // console.log("open")
    setIsModalOpen(true)
  }
  return (
    <>
      {isModalOpen && (
        <ShowItemModal
          itemId={23413}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <button type="button" onClick={handleModalOpen}>
        도달 열기
      </button>
    </>
  )
}

export default Test
