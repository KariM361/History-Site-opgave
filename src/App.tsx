import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Nav } from './components/Nav/Nav';
import { Header } from './components/Header/Header';
import {ByDate} from './pages/Date/ByDate'
import{Since} from './pages/Since/Since'
import{ Today} from './pages/Today/Today'


function App() {
 
 return (
    <>

          <BrowserRouter>
          <Header></Header>
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
