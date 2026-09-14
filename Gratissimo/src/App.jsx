import { BrowserRouter, Routes, Route } from 'react-router' 
import { Frontpage } from './Pages/Frontpage'
import { Newspage } from './Pages/Newspage'
import { Searchresultpage } from './Pages/Searchresultpage'
import { Advertisementpage } from './Pages/Advertisementpage'
import { Loginpage } from './Pages/Loginpage'
import { Profilpage} from './Pages/Profilpage'
import { Welcomepage } from './Pages/Welcomepage'



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Frontpage/>} />
      <Route path="/" element={ <Newspage/> } />
      <Route path="/" element={<Searchresultpage/>} />
      <Route path="/" element={<Advertisementpage/>} />
      <Route path="/" element={ <Loginpage/> } />
      <Route path= "/" element={<Profilpage/>} />
      <Route path="/" element = {<Welcomepage/>} />
      


      
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
