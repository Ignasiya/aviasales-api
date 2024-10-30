import React from 'react'
import css from './filters-item.module.scss'

interface FiltersItemProps {
  className?: string
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  filter: {
    name: string
    label: string
  }
}

export default function FiltersItem({ className, filter, ...props }: FiltersItemProps) {
  return (
    <label className={className}>
      <input className={css.check__input} type='checkbox' name={filter.name} {...props} />
      <span className={css.check__box} />
      {filter.label}
    </label>
  )
}
