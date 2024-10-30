import React from 'react'
import FiltersItem from '@/modules/tickets/components/FiltersItem'
import { useAppDispatch, useAppSelector } from '@/store'
import { setFilters, ticketsSlice } from '@/modules/tickets/tickets.slice'
import css from './filters-list.module.scss'

const filters = [
  { name: 'all', label: 'Все' },
  { name: '0Transfer', label: 'Без пересадок' },
  { name: '1Transfer', label: '1 пересадка' },
  { name: '2Transfers', label: '2 пересадки' },
  { name: '3Transfers', label: '3 пересадки' }
]

export default function FiltersList() {
  const selectedFilters = useAppSelector(ticketsSlice.selectors.filters)
  const dispatch = useAppDispatch()

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target

    const allFilters = filters.map(filter => filter.name)

    if (name === 'all') {
      dispatch(setFilters(checked ? allFilters : []))
    } else {
      const updatedFilters = checked
        ? selectedFilters.filter(filter => filter !== 'all').concat(name)
        : selectedFilters.filter(filter => filter !== name && filter !== 'all')

      const allFiltersSelected = allFilters
        .slice(1)
        .every(filter => updatedFilters.includes(filter))

      dispatch(setFilters(allFiltersSelected ? allFilters : updatedFilters))
    }
  }

  return (
    <aside className={css.filters}>
      <form>
        <fieldset className={css.filters__list}>
          <legend className={css.filters__title}>Количество пересадок</legend>
          {filters.map(filter => (
            <FiltersItem
              key={filter.name}
              className={css.filters__item}
              filter={filter}
              checked={selectedFilters.includes(filter.name)}
              onChange={handleFilterChange}
            />
          ))}
        </fieldset>
      </form>
    </aside>
  )
}
