import { z } from 'zod'

const baseUrl = 'https://aviasales-test-api.kata.academy'

const SearchIdSchema = z.object({
  searchId: z.string()
})

const TicketSchema = z.object({
  price: z.number(),
  carrier: z.string(),
  segments: z.array(
    z.object({
      origin: z.string(),
      destination: z.string(),
      date: z.string(),
      stops: z.array(z.string()),
      duration: z.number()
    })
  )
})

const TicketsResponseSchema = z.object({
  stop: z.boolean(),
  tickets: z.array(TicketSchema)
})

async function handleResponse(response: Response) {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }
  return await response.json()
}

export const api = {
  getSearchId: async () => {
    const response = await fetch(`${baseUrl}/search`)
    const { searchId } = SearchIdSchema.parse(await handleResponse(response))
    return searchId
  },

  getTickets: async (searchId: string) => {
    const response = await fetch(`${baseUrl}/tickets?searchId=${searchId}`)
    const data = TicketsResponseSchema.parse(await handleResponse(response))
    return data
  }
}
