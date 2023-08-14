import React, { createContext, FC, PropsWithChildren, useCallback, useState } from 'react'

import { GenericStateType } from '../../utils/helpers/types'
import { useCustomContext } from '../../utils/helpers/useCustomContext'

import { DisplayModalContextType, DisplayModalStateType } from './displayModalTypes'

const INITIAL_DISPLAY_MODAL_CONTEXT: DisplayModalContextType = {
  openModal: () => null,
  closeModal: () => null,
  displayModalState: {
    error: '',
    loading: false,
    state: {
      isOpen: false,
    },
  },
}

const DisplayModalContext = createContext<DisplayModalContextType>(
  INITIAL_DISPLAY_MODAL_CONTEXT,
)

const DisplayModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [displayModalState, setDisplayModalState] = useState<
    GenericStateType<DisplayModalStateType>
  >(INITIAL_DISPLAY_MODAL_CONTEXT.displayModalState)

  const setLoading = (value = true) =>
    setDisplayModalState(prevState => ({ ...prevState, loading: value }))

  const setError = (msg: string) =>
    setDisplayModalState(prevState => ({ ...prevState, loading: false, error: msg }))

  const clearError = () =>
    setDisplayModalState(prevState => ({ ...prevState, error: '' }))

  const closeModal = useCallback(
    () => {
      displayModalState.state.isOpen &&
        setDisplayModalState(prevState => ({ ...prevState, state: { ...prevState.state, isOpen: false } }))
    },
    [displayModalState.state.isOpen],
  )

  const openModal = useCallback(
    () => {
      !displayModalState.state.isOpen &&
        setDisplayModalState(prevState => ({ ...prevState, state: { ...prevState.state, isOpen: true } }))
    },
    [displayModalState.state.isOpen],
  )

  return (
    <DisplayModalContext.Provider
      value={{ displayModalState, openModal, closeModal }}>
      {children}
    </DisplayModalContext.Provider>
  )
}

const useDisplayModal = () =>
  useCustomContext<DisplayModalContextType>(DisplayModalContext)

export { DisplayModalProvider, useDisplayModal }
