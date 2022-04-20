import { FC, Fragment } from 'react'
import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { XIcon } from '@heroicons/react/solid'

const Modal: FC = () => {
  const [showModal, setShowModal] = useRecoilState(modalState)

  const closeHandler = () => {
    setShowModal(false)
  }

  return (
    <MuiModal open={showModal} onClose={closeHandler}>
      <Fragment>
        <button
          onClick={closeHandler}
          className="modal-button absolute top-5 right-5 z-40 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XIcon className="w-6" />
        </button>

        {/* TODO: React Player */}
      </Fragment>
    </MuiModal>
  )
}

export default Modal
