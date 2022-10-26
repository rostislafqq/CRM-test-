import React from 'react'

interface AdressI{
    address:string
}
export const Address:React.FC<AdressI> = ({address}) => {
  return (

                
                <li className="main__contentItem">
                  {address}
                </li>


  )
}
