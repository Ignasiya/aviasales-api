import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { ticketsSlice, storedAction } from '@/modules/tickets/tickets.slice'
import initialTickets from './modules/tickets/tickets.data'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    [ticketsSlice.name]: ticketsSlice.reducer
  }
})

store.dispatch(storedAction({ ...initialTickets }))

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store
