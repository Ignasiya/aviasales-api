import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { ticketsSlice } from '@/modules/tickets/tickets.slice'
import { api } from '@/shared/api'
import type { ThunkAction, UnknownAction } from '@reduxjs/toolkit'

const extraArgument = {
  api
}

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    [ticketsSlice.name]: ticketsSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: { extraArgument } })
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<R = void> = ThunkAction<R, AppState, typeof extraArgument, UnknownAction>

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store
