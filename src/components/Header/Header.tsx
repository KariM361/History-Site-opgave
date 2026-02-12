import { useLocation } from 'react-router'
import fotos from '../../assets/Images/fotos.jpg'
import style from './Header.module.scss'
import { Title } from '../Title/Title'

export function Header() {
    let heading = `ON THIS DAY`
    let text = `What happened on this day - historical events, deaths and births thoughout time`
    let location = useLocation()

    

    if (location.pathname === `/ByDate`) {
        heading = `ON: 22/08`
        text = `What happened on this day - Here you can enter a specific date to get only events that happened on this date`

    }

    if (location.pathname === `/Since`) {
        heading = `SINCE: 1947`
        text = `What happened on this day - Here you can enter a specific year to get only events for that year`
    }
console.log(location.pathname);

    return (
        <header className={style.container}>
            <img className={style.old_picture} src={fotos} alt="fotos" />
            <div className={style.heading}>
            <Title text={heading} pText={text}/>
            </div>
        </header>

    )
}

