import React from 'react'
import main from "../../assets/ic_main.svg"
import lens from "../../assets/lens.svg"
import tabels from "../../assets/tabels.svg"
import calendar from "../../assets/calendar.svg"
import map from "../../assets/map.svg"
import widgets from "../../assets/widgets.svg"
import settings from "../../assets/settings.svg"
import profile from "../../assets/profile.svg"
import finances from "../../assets/finances.svg"
import exit from "../../assets/widgets.svg"
import arrow from "../../assets/arrow.svg"
import { Link } from 'react-router-dom'

interface menuI{
    isOpen:boolean
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

 const Menu:React.FC<menuI> = ({isOpen,setIsOpen}) => {
  return (
    <div className="menu">
        
        <ul className="menu__items">
            <li className="menu__item">Меню</li>
            <li className="menu__item">
                <Link to="/">
                <img src={main} alt="картинка"/>
                <span>Главная</span>
                </Link>
            </li>
            <li className="menu__item">
                <Link to="/address">
                <img src={lens} alt="картинка"/>
                <span>Поиск адресов</span>
            </Link>
            </li>
            <li className="menu__item">
                <Link to="/">
                <img src={tabels} alt="картинка"/>
                <span>Таблицы</span>
            </Link>
            </li>
            <li className="menu__item">
                <Link to="/">
                <img src={calendar} alt="картинка"/>
                <span>Календарь</span>
            </Link>
            </li>
            <li className="menu__item">
                <Link to="/">
                <img src={map} alt="картинка"/>
                <span>Карты</span>
            </Link>
            </li>
            <li className="menu__item">
                <Link to="/">
                 <img src={widgets} alt="картинка"/>
                 <span>Виджеты</span>
                </Link>
                
            </li>
            <li className="menu__itemU" onClick={()=>
                {
                    
                    setIsOpen(!isOpen)}
                    
                }>
                <img src={settings} alt="картинка"/>
                <span>Настройки </span>
                <img className={isOpen ? "menu__arrow menu__arrow--active" :'menu__arrow'}  src={arrow} alt="картинка"/> 
            <ul onClick={(e)=>{
                e.stopPropagation()
            }} className={isOpen?"" : "menu__settings--close"}>
                
                    
                <li >
                     <Link to="/">
                    <img src={profile} alt="картинка"/>
                <span>Настройки
                    профиля</span>
                </Link>
                </li>
                <li>
                     <Link to="/">
                    <img src={finances} alt="картинка"/>
                <span>Управление
                    финансами</span>
                </Link>
                </li>
            </ul>
        </li>
            <li className="menu__item">
                <Link to="/">
                    <img src={exit} alt="картинка"/>
                <span>Выход</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu
