import { useLocation } from 'react-router'
import { useState } from "react";
import fotos from '../../assets/Images/fotos.jpg'
import style from './Header.module.scss'
import { Title } from '../Title/Title'


export function Header() {
  const location = useLocation();

  const [date, setDate] = useState("22/08");
  const [year, setYear] = useState("1947");

  let heading: React.ReactNode = `ON THIS DAY`;
  let text =
    `What happened on this day - historical events, deaths and births throughout time`;

  // ByDate → input til dato
  if (location.pathname === "/ByDate") {
    heading = (
      <>
        ON:{" "}
        <input
          className={style.Input}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="dd/mm"
        />
      </>
    );

    text =
      "What happened on this day - Here you can enter a specific date to get only events that happened on this date";
  }

  // Since → input til år
  if (location.pathname === "/Since") {
    heading = (
      <>
        SINCE:{" "}
        <input
          className={style.input}
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="yyyy"
        />
      </>
    );

    text =
      "What happened on this day - Here you can enter a specific year to get only events for that year";
  }

  return (
    <header className={style.container}>
      <img className={style.old_picture} src={fotos} alt="fotos" />
      <div className={style.heading}>
        <Title text={heading} pText={text} />
      </div>
    </header>
  );
}