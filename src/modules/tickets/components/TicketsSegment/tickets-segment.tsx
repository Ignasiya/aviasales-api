import { TicketSegment } from '@/modules/tickets/tickets.types'
import { useFormatterSegment } from './useFormatter'
import css from './tickets-segment.module.scss'

type TicketSegmentProps = {
  segment: TicketSegment
}

export default function TicketsSegment({ segment }: TicketSegmentProps) {
  const segmentInfo = useFormatterSegment(segment)

  return (
    <li className={css.segment}>
      <div className={css.segment__section}>
        <span
          className={css.text_gray}
        >{`${segmentInfo.origin} - ${segmentInfo.destination}`}</span>
        <span className={css.text_black}>{segmentInfo.timeRange}</span>
      </div>
      <div className={css.segment__section}>
        <span className={css.text_gray}>В пути</span>
        <span className={css.text_black}>{segmentInfo.durationFormatted}</span>
      </div>
      <div className={css.segment__section}>
        <span className={css.text_gray}>{segmentInfo.transferLabel}</span>
        <span className={css.text_black}>{segmentInfo.stops}</span>
      </div>
    </li>
  )
}
