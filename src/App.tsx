import { BrowserRouter, Route, Routes } from 'react-router'
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
            <Route path='/Today' element ={<Today/>} />
            <Route path='/ByDate' element={<ByDate/>} />
            <Route path='/Since' element={<Since/>} />
          </Routes>
        </BrowserRouter>    
    </>
  )
}

export default App
