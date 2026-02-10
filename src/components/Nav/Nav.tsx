import { NavLink } from "react-router";
import style from './Nav.module.scss'


export function Nav(){
  return(
    <nav className={style.navStyle}>
      <ul>
        <li>
          <NavLink  to='/ByDate'>By Date</NavLink>
        </li>
        <li>
          <NavLink to='/Since'>Since</NavLink>
        </li>
        <li>
          <NavLink to='/'>Today</NavLink>
        </li>
      </ul>
    </nav>
  )
} 