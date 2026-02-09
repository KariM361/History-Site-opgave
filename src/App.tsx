import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import './App.css'
import { Nav } from './components/Nav/Nav';
import React from 'react';
import {ByDate} from './pages/Date/ByDateSite'
import{Since} from './pages/Since/Since'
import{ Today} from './pages/Today/TodaySite'

function App() {
 let location = useLocation();
   React.useEffect(() => {
    // Google Analytics
    ga('send', 'pageview');
  }, [location]);
 return (
    <>

          <BrowserRouter>
          <Nav/>
        <Routes>
            <Route path='/ByDate' element={<ByDate/>} />
            <Route path='/Since' element={<Since/>} />
            <Route path='/Today' element={<Today/>} />
          </Routes>
        </BrowserRouter>    
    </>
  )
}

export default App
