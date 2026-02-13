import { useEffect, useState } from "react";
import type { HistoryData } from "../../Types/HistoryTypes";
import style from '../Since/Since.module.scss';

// Komponent til siden "Since", der viser historiske begivenheder filtreret efter år
export function Since() {
  // State til at gemme de hentede data fra API'en
  const [data, setData] = useState<HistoryData>();

  // State til søgeåret, som brugeren kan indtaste
  const [searchYear] = useState("");

    // useEffect til at hente data når komponenten mountes
  useEffect(() => {
    const url = 'https://history.muffinlabs.com/date';
    async function doFetchOnMount() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    }
  doFetchOnMount();
}, []);

// Funktion til at filtrere begivenheder efter det valgte år
function filterByYear(events: any[]) {
    if (!searchYear) return events;
    return events.filter((item) => item.year === searchYear);
  }

  return (
    <div className={style.timeline}>
      {(filterByYear(data?.data?.Events || [])).map((item, index) => {
        // Bestem om kortet skal være på venstre eller højre side
        const side = index % 2 === 0 ? "left" : "right";

        return (
          <section key={item.year + item.text} className={`${style.Since} ${style[side]}`}>
            <p className={style.year}>Year: {item.year}</p>
            <div className={style.arm}></div>
            <div className={style.card}>
              <p>{item.text}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}


