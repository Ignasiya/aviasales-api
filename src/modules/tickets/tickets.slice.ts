import { createSlice, createAction, createSelector } from '@reduxjs/toolkit'
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

export const setSort = createAction<string | undefined>('setSort')

export const setFilters = createAction<string[]>('setFilters')

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  selectors: {
    tickets: state => state.entities,
    ids: state => state.ids,
    sort: state => state.sort,
    filters: state => state.filters,
    sortedFilters: createSelector(
      [
        (state: TicketsState) => state.ids,
        (state: TicketsState) => state.entities,
        (state: TicketsState) => state.sort,
        (state: TicketsState) => state.filters
      ],
      (ids, entities, sort, filters) => {
        const filteredTickets = ids
          .map(id => entities[id])
          .filter(
            (ticket): ticket is Ticket =>
              ticket !== undefined &&
              filters.every(filter =>
                ticket.segments.some(segment => segment.stops.length === parseInt(filter))
              )
          )

        return filteredTickets.sort((a, b) => {
          if (sort === 'price') return a.price - b.price
          if (sort === 'time') return a.segments[0].duration - b.segments[0].duration
          if (sort === 'optimal') {
            const aOptimal = a.segments[0].duration / a.price
            const bOptimal = b.segments[0].duration / b.price
            return aOptimal - bOptimal
          }
          return 0
        })
      }
    )
  },
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
    builder.addCase(setSort, (state, action: PayloadAction<string | undefined>) => {
      state.sort = action.payload || ''
    })
    builder.addCase(setFilters, (state, action: PayloadAction<string[]>) => {
      state.filters = action.payload
    })
  }
})
