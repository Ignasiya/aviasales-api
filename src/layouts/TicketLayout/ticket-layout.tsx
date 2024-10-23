import Header from '@/components/Header'
import FiltersList from '@/components/FiltersList'
import Sorting from '@/components/Sorting'
import TicketsList from '@/components/TicketsList'
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
