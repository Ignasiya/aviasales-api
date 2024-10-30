import { useState } from 'react'
import { useAppSelector } from '@/store'
import { Ticket } from '@/modules/tickets/tickets.types'
import { ticketsSlice } from '@/modules/tickets/tickets.slice'
import TicketsItem from '@/modules/tickets/components/TicketsItem'
import css from './tickets-list.module.scss'

export default function Tickets() {
  const filterSortedTickets = useAppSelector(state => ticketsSlice.selectors.sortedFilters(state))

  const [displayCount, setDisplayCount] = useState<number>(5)

  const handleLoadMore = () => {
    setDisplayCount(prevCount => prevCount + 5)
  }

  const size = filterSortedTickets.length

  return size ? (
    <section className={css.tickets}>
      <ul className={css.tickets__list}>
        {filterSortedTickets
          .slice(0, displayCount)
          .map(
            (ticket: Ticket | undefined) =>
              ticket && <TicketsItem key={ticket?.price} ticket={ticket} />
          )}
      </ul>
      {displayCount < size && (
        <button className={css.tickets__btn} onClick={handleLoadMore}>
          Показать еще 5 билетов
        </button>
      )}
    </section>
  ) : (
    <div className={css.tickets__empty}>Ничего не найдено</div>
  )
}
