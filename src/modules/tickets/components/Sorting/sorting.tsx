import React from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import { setSort, ticketsSlice } from '@/modules/tickets/tickets.slice'
import css from './sorting.module.scss'
import classNames from 'classnames'

const sortOptions = [
  { label: 'Самый дешевый', value: 'price', position: css.left },
  { label: 'Самый быстрый', value: 'time' },
  { label: 'Оптимальный', value: 'optimal', position: css.right }
]

export default function Sorting() {
  const sort = useAppSelector(ticketsSlice.selectors.sort)
  const dispatch = useAppDispatch()

  const handleSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    const sortType = event.currentTarget.dataset.sort
    if (sortType) {
      dispatch(setSort(sortType))
    }
  }

  return (
    <section className={css.sort__options}>
      {sortOptions.map(({ label, value, position }) => (
        <button
          key={value}
          className={classNames(css.sort__btn, position, {
            [css.selected]: sort === value
          })}
          aria-label={`Сортировать по ${label.toLowerCase()}`}
          data-sort={value}
          onClick={handleSort}
          disabled={sort === value}
        >
          {label}
        </button>
      ))}
    </section>
  )
}
