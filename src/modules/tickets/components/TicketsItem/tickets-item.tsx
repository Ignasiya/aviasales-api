import css from './tickets-item.module.scss'

export default function TicketsItem() {
  return (
    <li className={css.ticket}>
      <h3 className={css.ticket__price}>13 400 P</h3>
      <img
        className={css.ticket__logo}
        src='https://pics.avs.io/99/36/S7.png'
        alt='s7-airlines'
        loading='lazy'
      />
      <ul className={css.ticket__info}>
        <li className={css.ticket__segment}>
          <div className={css.ticket__section}>
            <span className={css.text_gray}>MOW - HKT</span>
            <span className={css.text_black}>10:45 - 08:00</span>
          </div>
          <div className={css.ticket__section}>
            <span className={css.text_gray}>В пути</span>
            <span className={css.text_black}>21ч 15м</span>
          </div>
          <div className={css.ticket__section}>
            <span className={css.text_gray}>1 пересадка</span>
            <span className={css.text_black}>HKG, JNB</span>
          </div>
        </li>

        <li className={css.ticket__segment}>
          <div className={css.ticket__section}>
            <span className={css.text_gray}>MOW - HKT</span>
            <span className={css.text_black}>11:20 - 00:50</span>
          </div>
          <div className={css.ticket__section}>
            <span className={css.text_gray}>В пути</span>
            <span className={css.text_black}>13ч 30м</span>
          </div>
          <div className={css.ticket__section}>
            <span className={css.text_gray}>1 пересадка</span>
            <span className={css.text_black}>HKG</span>
          </div>
        </li>
      </ul>
    </li>
  )
}
