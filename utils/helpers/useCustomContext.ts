import { Context, useContext } from 'react'

export function useCustomContext<T>(context: Context<T>): T {
  const customContext = useContext(context)

  if (!customContext)
    throw new Error('useContext() called outside of a Provider?')
  // an alert is not placed because this is an error for the developer not the user

  return customContext
}
