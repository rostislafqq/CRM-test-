import React, { useCallback,  useState } from 'react'
import { Address } from './address'
import { AddressEmpty } from './addressEmpty'
import { AdressInput } from './adressInput'


export const AddressContainer = () => {
    const [address,setAdderss]=useState("")
    const [adressFounded,setAdressFounded]=useState<any>([])
    
    const search = useCallback(()=>{
        if(address.length>3){
        const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
        const token = "d451cc185360fa837e8aba3cd2aa31eedde373cc";  
        const options:RequestInit = {
            method: "POST",
            mode: "cors",
            
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: address,count:20})
        }
        
        fetch(url, options)
        .then(response => response.json())
        .then(result => setAdressFounded(result.suggestions))
        .catch(error => console.log("error", error))
    }
    else{
        setAdressFounded([])
    }
    },[address])
   
  return (
    <div className='main'>
         <h1 className="main__title">Поиск адресов</h1>
        <h3 className="main__info">Введите интересующий вас адрес</h3>
        <AdressInput search={search} setAdderss={setAdderss} address={address}/>
        
        <div className="main__content">
       
            <ul>
            <li className="main__contentHeader"> <h3>Адреса</h3></li>
            {adressFounded.length>0?adressFounded.map((val:any)=> <Address address={val.value} key={val.value}/>):<AddressEmpty/>}
           
            </ul>
        </div> 
  
       
    </div>
   
  )
}
