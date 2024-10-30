import { createSlice, createAction } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Ticket, TicketsState } from '@/modules/tickets/tickets.types'
import { v4 as uuidv4 } from 'uuid'

const initialState: TicketsState = {
  searchId: '',
  entities: {},
  ids: [],
  stop: false,
  filters: [],
  sort: '',
  isLoading: false,
  error: ''
}

export const storedAction = createAction<{
  tickets: Ticket[]
  stop: boolean
}>('stored')

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      storedAction,
      (state, action: PayloadAction<{ tickets: Ticket[]; stop: boolean }>) => {
        const { tickets, stop } = action.payload

        state.ids = tickets.map(ticket => {
          const ticketId = uuidv4()
          state.entities[ticketId] = ticket
          return ticketId
        })

        state.stop = stop
      }
    )
  }
})
