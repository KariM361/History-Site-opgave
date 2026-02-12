import { useEffect, useState } from "react";
import type { HistoryData } from "../../Types/HistoryTypes";
import style from '../Date/ByDate.module.scss'

export function ByDate() {
 const [data, setData] = useState<HistoryData>()

 useEffect (()=> {
     const url= 'https://history.muffinlabs.com/date';
 
     async function doFetchOnMount(){
         const res= await fetch(url)
         const json = await res.json()
         setData(json) 
 
     }
     doFetchOnMount()
  },[])
    console.log(data);
    
      return(

<div className={style.byDate}>
{data?.data?.Events?.map((item, index)=>(<p key={index}>{item.text}</p>))}
</div>
    )
}