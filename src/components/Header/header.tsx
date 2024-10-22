import css from './header.module.scss'

export default function Header() {
  return (
    <header className={css.header}>
      <img src='/images/logo.png' alt='logo' />
    </header>
  )
}
