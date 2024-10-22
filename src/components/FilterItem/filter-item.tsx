import React from 'react'
import css from './filter-item.module.scss'

interface FilterItemProps {
  className?: string
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  filter: {
    name: string
    label: string
  }
}

export default function FilterItem({ className, filter, ...props }: FilterItemProps) {
  return (
    <label className={className}>
      <input className={css.check__input} type='checkbox' name={filter.name} {...props} />
      <span className={css.check__box} />
      {filter.label}
    </label>
  )
}
