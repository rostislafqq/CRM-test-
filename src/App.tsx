import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AddressContainer } from './components/address/addressContainer';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { MenuContainer } from './components/menu/menuContainer';


const App:React.FC=() => {

  
  return (
    <>
    <Header/>
    <div className="wrapper">
   <MenuContainer />
   <Routes>
   <Route path='/*' element={<Home/>} />
    <Route path='/address' element={<AddressContainer/>}/>
    </Routes>
    </div>

</>
  )
}

export default App;
