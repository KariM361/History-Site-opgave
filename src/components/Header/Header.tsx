import { useLocation } from 'react-router'
import fotos from '../../assets/Images/fotos.jpg'
import style from './Header.module.scss'
    
export function Header(){
        let heading = `ON THIS DAY`
        let text = `What happened on this day - historical events, deaths and births thoughout time`
        let location = useLocation()

        console.log(location.pathname);

        if(location.pathname === `/ByDate`) {
            heading = `ON: 22/08`
            text = `What happened on this day - Here you can enter a specific date to get only events that happened on this date`

        }

        if( location.pathname === `/Since`){
            heading = `SINCE: 1947`
            text = `What happened on this day - Here you can enter a specific year to get only events for that year`
        }
        
    return(
        <header>
            <img className={style.old_picture} src={fotos} alt="fotos" />
        </header>

    )
}

