import { AppThunk } from '@/store'
import { setError, setLoading, stored } from './tickets.slice'

const MAX_RETRIES = 3

export const fetchTicketsLoop =
  (): AppThunk =>
  async (dispatch, getState, { api }) => {
    dispatch(setLoading(true))
    dispatch(setError(null))

    try {
      const searchId = await api.getSearchId()
      if (!searchId) return

      while (!getState().tickets.stop) {
        let retries = 0
        let success = false

        while (retries < MAX_RETRIES && !success) {
          try {
            const data = await api.getTickets(searchId)
            dispatch(stored({ data }))
            success = true
          } catch (error) {
            retries += 1
            if (retries >= MAX_RETRIES) {
              dispatch(setError('Ошибка загрузки всех билетов: ' + String(error)))
              break
            }
          }
        }

        if (!success) break
      }
    } catch (error) {
      dispatch(setError('Ошибка загрузки идентификатора: ' + String(error)))
    } finally {
      dispatch(setLoading(false))
    }
  }
