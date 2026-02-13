import style from './Title.module.scss'

interface TitleProps {
  text: React.ReactNode
  pText: string
}

export function Title({ text, pText }: TitleProps) {
  return (
    <>
    <h1 className={style.titleStyle}>{text}</h1>
    <p className={style.pStyle}>{pText}</p>
    </>
  )
          
          

}