import { Ticket } from '@/modules/tickets/tickets.types'
import TicketsSegment from '../TicketsSegment'
import css from './tickets-item.module.scss'

type TicketsItemProps = {
  ticket: Ticket
}

export default function TicketsItem({ ticket }: TicketsItemProps) {
  const formattedPrice = new Intl.NumberFormat('ru-RU').format(ticket.price) + ' Р'

  return (
    <li className={css.ticket}>
      <h3 className={css.ticket__price}>{formattedPrice}</h3>
      <img
        className={css.ticket__logo}
        src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
        alt='s7-airlines'
        loading='lazy'
      />
      <ul className={css.ticket__info}>
        {ticket.segments.map((segment, index) => (
          <TicketsSegment key={index} segment={segment} />
        ))}
      </ul>
    </li>
  )
}
