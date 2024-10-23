import React from 'react'
import css from './tickets-list.module.scss'
import TicketsItem from '@/components/TicketsItem'

export default function Tickets() {
  return (
    <section className={css.tickets}>
      <ul className={css.tickets__list}>
        <TicketsItem />
        <TicketsItem />
        <TicketsItem />
        <TicketsItem />
        <TicketsItem />
      </ul>
      <button className={css.tickets__btn}>Показать еще 5 билетов</button>
    </section>
  )
}
