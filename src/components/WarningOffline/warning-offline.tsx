import css from './warning-offline.module.scss'

export default function WarningOffline() {
  return (
    <div className={css.warning}>
      <img className={css.warning__image} src='/images/warning_offline.png' alt='offline' />
      <div className={css.warning__desc}>
        Вы не подключены к Интернету. Пожалуйста, проверьте свое подключение к Интернету.
      </div>
      <button className={css.warning__btn} onClick={() => window.location.reload()}>
        Refresh
      </button>
    </div>
  )
}
