import React from 'react'
import css from './sorting.module.scss'
import classNames from 'classnames'

export default function Sorting() {
  return (
    <section className={css.sort__options}>
      <button
        className={classNames(css.sort__btn, css.left, css.selected)}
        aria-label='Сортировать по цене'
      >
        Самый дешевый
      </button>
      <button className={css.sort__btn} aria-label='Сортировать по времени'>
        Самый быстрый
      </button>
      <button
        className={classNames(css.sort__btn, css.right)}
        aria-label='Сортировать по оптимальности'
      >
        Оптимальный
      </button>
    </section>
  )
}
