import React, { useState } from 'react'
import FiltersItem from '@/components/FiltersItem'
import css from './filters-list.module.scss'

export default function FiltersList() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['all'])

  console.log(selectedFilters)

  const filters = [
    { name: 'all', label: 'Все' },
    { name: 'no-transfer', label: 'Без пересадок' },
    { name: 'one-transfer', label: '1 пересадка' },
    { name: 'two-transfers', label: '2 пересадки' },
    { name: 'three-transfers', label: '3 пересадки' }
  ]

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    setSelectedFilters(prevFilters => {
      if (name === 'all') {
        return checked ? ['all'] : []
      }

      if (checked) {
        return prevFilters.includes('all')
          ? [...prevFilters.filter(filter => filter !== 'all'), name]
          : [...prevFilters, name]
      } else {
        return prevFilters.filter(filter => filter !== name)
      }
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
