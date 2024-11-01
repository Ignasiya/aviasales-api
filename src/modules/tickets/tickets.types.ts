export type TicketId = string

type TicketResponse = {
  price: number
  carrier: string
  segments: TicketSegment[]
}

export type TicketsResponse = {
  stop: boolean
  tickets: TicketResponse[]
}

export type TicketSegment = {
  origin: string
  destination: string
  date: string
  duration: number
  stops: string[]
}

export type Ticket = {
  id: TicketId
  price: number
  carrier: string
  segments: TicketSegment[]
}

export type TicketsState = {
  entities: Record<TicketId, Ticket | undefined>
  ids: TicketId[]
  stop: boolean
  filters: string[]
  sort: string
  isLoading: boolean
  error: string | null
}
