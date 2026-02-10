import { useEffect, useState } from "react";
import type { HistoryData } from "../../Types/HistoryTypes";

export function ByDate() {
 const [data, setData] = useState<HistoryData>()

 useEffect (()=> {
     const url= ' https://history.muffinlabs.com/date/2/14';
 
     async function doFetchOnMount(){
         const res= await fetch(url)
         const json = await res.json()
         setData(json) 
 
     }
     doFetchOnMount()
  },[])
    console.log(data);
    
      return(

<div>
{data?.data?.Events?.map((item, index)=>(<p key={index}>{item.text}</p>))}
</div>
    )
}