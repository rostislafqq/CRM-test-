import logo from "../../assets/ic_logo.svg"
import person from "../../assets/ic_person.svg"
import React from 'react'
export const Header = () => {
  return (
    <header>

    <div className="header__items">
        <img className="header__svg" src={logo}></img>
        <h3 className="header__logo">Wrench CRM</h3></div>
      
    <div className="header__items">
        <img className="header__svg" src={person}></img>
        <h3 className="header__name">Имя Фамилия</h3></div>
</header>
  )
}
