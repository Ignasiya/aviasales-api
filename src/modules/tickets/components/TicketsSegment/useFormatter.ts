import { format } from 'date-fns'
import { TicketSegment } from '@/modules/tickets/tickets.types'

function formatTime(dateInput: string | Date) {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput
  return format(date, 'HH:mm')
}

function formatDuration(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return `${hours}ч ${remainingMinutes}м`
}

function getTransferLabel(count: number) {
  if (count === 0) return 'Без пересадок'
  if (count === 1) return '1 пересадка'
  if (count >= 2 && count <= 4) return `${count} пересадки`
  return `${count} пересадок`
}

export function useFormatterSegment(segment: TicketSegment) {
  const startTime = formatTime(segment.date)
  const endDate = new Date(new Date(segment.date).getTime() + segment.duration * 60 * 1000)
  const endTime = formatTime(endDate)

  return {
    origin: segment.origin,
    destination: segment.destination,
    timeRange: `${startTime} - ${endTime}`,
    durationFormatted: formatDuration(segment.duration),
    transferLabel: getTransferLabel(segment.stops.length),
    stops: segment.stops.join(', ')
  }
}
