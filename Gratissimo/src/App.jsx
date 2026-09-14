import { BrowserRouter, Routes, Route } from 'react-router' 
import { Frontpage } from './Pages/Frontpage'
import { Newspage } from './Pages/Newspage'
import { Searchresultpage } from './Pages/Searchresultpage'
import { Advertisementpage } from './Pages/Advertisementpage'
import { Loginpage } from './Pages/Loginpage'
import { Profilpage} from './Pages/Profilpage'
import { Mypage } from './Pages/Mypage'
import { MainLayout } from './Layout/mainLayout'



function App() {

  return (
    <>
    <BrowserRouter>
    < Routes >
     <Route path="/" element={<MainLayout/>} >
     <Route index element= {<Frontpage/>} />
      <Route path="/news" element={ <Newspage/> } />
      <Route path="/search" element={<Searchresultpage/>} />
      <Route path="/annonce" element={<Advertisementpage/>} />
      <Route path="/login" element={ <Loginpage/> } />
      <Route path= "/profil" element={<Profilpage/>} />
      <Route path="/mypage" element = {<Mypage/>} />
      </Route> 
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
