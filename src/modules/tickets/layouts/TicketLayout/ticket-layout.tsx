import Header from '@/modules/tickets/components/Header'
import FiltersList from '@/modules/tickets/components/FiltersList'
import Sorting from '@/modules/tickets/components/Sorting'
import TicketsList from '@/modules/tickets/components/TicketsList'
import css from './ticket-layout.module.scss'

export default function TicketLayout() {
  return (
    <>
      <Header />
      <main className={css.content}>
        <Sorting />
        <FiltersList />
        <TicketsList />
      </main>
    </>
  )
}
