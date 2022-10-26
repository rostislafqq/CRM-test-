import React from 'react'
import {useState} from 'react'
import Menu  from './menu'

export const MenuContainer = () => {
    const [isOpen,setIsOpen]  = useState(false)
    
  return (
   <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
  )
}
