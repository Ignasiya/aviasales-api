import React, { useState } from 'react'
import FiltersItem from '@/modules/tickets/components/FiltersItem'
import css from './filters-list.module.scss'

export default function FiltersList() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const filters = [
    { name: 'all', label: 'Все' },
    { name: 'noTransfer', label: 'Без пересадок' },
    { name: 'oneTransfer', label: '1 пересадка' },
    { name: 'twoTransfers', label: '2 пересадки' },
    { name: 'threeTransfers', label: '3 пересадки' }
  ]

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target

    const allFilters = filters.map(filter => filter.name)

    setSelectedFilters(prevFilters => {
      if (name === 'all') return checked ? allFilters : []

      const updatedFilters = checked
        ? prevFilters.filter(filter => filter !== 'all').concat(name)
        : prevFilters.filter(filter => filter !== 'all' && filter !== name)

      const allFiltersSelected = allFilters
        .slice(1)
        .every(filter => updatedFilters.includes(filter))

      return allFiltersSelected ? allFilters : updatedFilters
    })
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
