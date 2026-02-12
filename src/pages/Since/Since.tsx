import { useEffect, useState } from "react";
import type { HistoryData } from "../../Types/HistoryTypes";
import style from '../Since/Since.module.scss';

export function Since() {
  const [data, setData] = useState<HistoryData>();

  useEffect(() => {
    const url = 'https://history.muffinlabs.com/date';
    async function doFetchOnMount() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    }
    doFetchOnMount();
  }, []);

  return (
    <div className={style.timeline}>
      {data?.data?.Events?.map((item, index) => {
        // Brug index % 2 til at skifte side: left/right
        const side = index % 2 === 0 ? "left" : "right";

        return (
          <section key={item.year + item.text} className={`${style.Since} ${style[side]}`}>
            <p className={style.year}>Year {item.year}</p> {/* året over armen */}
            <div className={style.arm}></div>          {/* armen/pinden */}
            <div className={style.card}>
              <p>{item.text}</p>                      {/* teksten under armen */}
            </div>
          </section>
        );
      })}
    </div>
  );
}
