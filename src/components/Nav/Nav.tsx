import { NavLink } from 'react-router'
import style from './Navbar.module.scss'

interface NavProps {
  Nav: string
  linksNav: Array<{ name: string; path: string }>
}

export function Nav (props: NavProps) {
  const {Nav, linksNav } = props

  return (
    <nav className={style.navStyle}>
      <h3>{Nav}</h3>
      <ul>
        {linksNav.map((item) => {
          return (
            <li key={item.path}>
              <NavLink to={item.path}>{item.name.toUpperCase()}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
} 