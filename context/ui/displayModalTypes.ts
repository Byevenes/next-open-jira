import { GenericStateType } from '../../utils/helpers/types'

export type DisplayModalStateType = {
  isOpen?: boolean
}

export type DisplayModalContextType = {
  openModal: () => void
  closeModal: () => void
  displayModalState: GenericStateType<DisplayModalStateType>
}