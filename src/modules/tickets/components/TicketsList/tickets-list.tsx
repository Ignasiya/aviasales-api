import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import { Ticket } from '@/modules/tickets/tickets.types'
import { ticketsSlice } from '@/modules/tickets/tickets.slice'
import { fetchTicketsLoop } from '../../tickets.api'
import TicketsItem from '@/modules/tickets/components/TicketsItem'
import css from './tickets-list.module.scss'
import Spinner from '@/components/Spinner'

export default function Tickets() {
  const filterSortedTickets = useAppSelector(state => ticketsSlice.selectors.sortedFilters(state))
  const error = useAppSelector(ticketsSlice.selectors.error)
  const isLoading = useAppSelector(ticketsSlice.selectors.isLoading)

  const dispatch = useAppDispatch()

  const [displayCount, setDisplayCount] = useState<number>(5)

  useEffect(() => {
    dispatch(fetchTicketsLoop())
  }, [dispatch])

  const handleLoadMore = () => {
    setDisplayCount(prevCount => prevCount + 5)
  }

  const size = filterSortedTickets.length

  if (error) {
    return (
      <div role='alert' className={css.tickets__error}>
        <div className={css.error}>Произошла ошибка: {error}, попробуйте позже</div>
        <button className={css.error__btn} onClick={() => dispatch(fetchTicketsLoop())}>
          Повторить
        </button>
      </div>
    )
  }

  return size ? (
    <section className={css.tickets}>
      <div className={css.tickets__loader}>{isLoading && <Spinner />}</div>
      <ul className={css.tickets__list}>
        {filterSortedTickets
          .slice(0, displayCount)
          .map(
            (ticket: Ticket | undefined) =>
              ticket && <TicketsItem key={ticket.id} ticket={ticket} />
          )}
      </ul>
      {displayCount < size && (
        <button className={css.tickets__btn} onClick={handleLoadMore}>
          Показать еще 5 билетов
        </button>
      )}
    </section>
  ) : (
    <div className={css.tickets__empty}>Рейсов, подходящих под заданные фильтры, не найдено</div>
  )
}
