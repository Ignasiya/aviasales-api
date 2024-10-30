export type TicketId = string

export type TicketSegment = {
  origin: string
  destination: string
  date: string
  duration: number
  stops: string[]
}

export type Ticket = {
  price: number
  carrier: string
  segments: TicketSegment[]
}

export type TicketsState = {
  searchId: string
  entities: Record<TicketId, Ticket | undefined>
  ids: TicketId[]
  stop: boolean
  filters: string[]
  sort: string
  isLoading: boolean
  error: string
}
