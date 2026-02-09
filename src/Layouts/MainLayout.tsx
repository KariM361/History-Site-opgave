import style from './MainLayout.module.scss'
import { Nav } from '../components/Nav/Nav'

export function MainLayout() {
  const links = [
    // { name: 'home', path: '/' },
    { name: 'By Date', path: '/By Date' },
    { name: 'Today', path: '/Today' },
    { name: 'Since', path: '/Since' },

  ]

  return (
    <section className={style.pageContainer}>
      <Nav logoNav='On This Day' linksNav={links} />
      
    </section>
  )
}