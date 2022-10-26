import React from 'react'
import whiteLens from "../../assets/whiteLens.svg"

interface AdressI{
    setAdderss:React.Dispatch<React.SetStateAction<string>>
    address:string
    search:() => void
}
export const AdressInput:React.FC<AdressI> = ({setAdderss,address,search}) => {
  return (
    <form >
    <input value={address} onChange={(e)=>{
       setAdderss(e.target.value)
    }} className="main__input" placeholder="Введите интересующий вас адрес" type="text"/>
    <button onClick={(e)=>{
        e.preventDefault()
        search()
    }} className="main__label">
        <img src={whiteLens} alt="img"/>
        Поиск
    </button>
</form>
  )
}
