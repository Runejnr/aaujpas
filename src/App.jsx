import React from "react";
import { Navbar, Footer } from './constants'
import { Archive, ArchiveList, Announcement, Home, Contact, Eboard, Guidelines, Papers, Newsletter } from "./components";
import './index.css'

import { Routes, Route } from 'react-router-dom'


const App = () => {
  return(
    <div className="app__container">
      <Navbar />

      <div className="body__container">
        <Routes>
          <Route path='/'             element={[<Home/>]}/>
          <Route path='/archive'      element={[<Archive/>]}/>
          <Route path='/archive/:year'      element={[<ArchiveList/>]}/>
          <Route path='/contact'      element={[<Contact/>]}/>
          <Route path='/editorial'    element={[<Eboard/>]}/>
          <Route path='/guidelines'   element={[<Guidelines/>]}/>
          <Route path='/papers'       element={[<Papers/>]}/>
          <Route path='/newsletter'   element={[<Newsletter/>]}/>

        </Routes>
      </div>
        
      <Announcement/>
      <Footer/>
    </div>
  )
}

export default App