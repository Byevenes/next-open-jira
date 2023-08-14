export type GenericStateType<T> = {
  error: string | null
  loading: boolean
  state: T
}

export type GenericResponse<T> = {
  payload: T
  message: string
}
