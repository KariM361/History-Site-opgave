import { NavLink } from "react-router";

export function Nav(){
  return(
    <nav>
      <ul>
        <li>
          <NavLink to='/ByDate'>By Date</NavLink>
        </li>
        <li>
          <NavLink to='/Since'>Since</NavLink>
        </li>
        <li>
          <NavLink to='/Today'>Today</NavLink>
        </li>
      </ul>
    </nav>
  )
} 