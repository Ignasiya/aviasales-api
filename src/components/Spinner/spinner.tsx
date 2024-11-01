import css from './spinner.module.scss'

export default function Spinner() {
  return (
    <div className={css.loadingio}>
      <div className={css.spinner}>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
