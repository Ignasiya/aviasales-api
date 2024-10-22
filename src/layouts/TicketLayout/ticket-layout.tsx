import Header from '@/components/Header'
import FilterList from '@/components/FilterList'
import css from './ticket-layout.module.scss'

export default function TicketLayout() {
  return (
    <>
      <Header />
      <main className={css.content}>
        <section className='sort-options'>
          <button className='sort-button' aria-label='Сортировать по цене'>
            Самый дешевый
          </button>
          <button className='sort-button' aria-label='Сортировать по времени'>
            Самый быстрый
          </button>
          <button className='sort-button' aria-label='Сортировать по оптимальности'>
            Оптимальный
          </button>
        </section>

        <FilterList />

        <section className='tickets'>
          <ul>
            {/* Здесь можно отрисовать список билетов с использованием map */}
            <li className='ticket'>
              <h3>Авиабилет 1</h3>
              <p>Цена: 5000 руб.</p>
              <p>Время в пути: 2 ч 30 мин</p>
              <p>Пересадки: 0</p>
            </li>
            <li className='ticket'>
              <h3>Авиабилет 2</h3>
              <p>Цена: 7000 руб.</p>
              <p>Время в пути: 3 ч 15 мин</p>
              <p>Пересадки: 1</p>
            </li>
            {/* Дополнительные авиабилеты... */}
          </ul>
        </section>
      </main>
    </>
  )
}
