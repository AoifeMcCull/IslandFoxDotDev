import './App.css'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
import { createTheme } from '@mui/material'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';


function App() {

  const theme = createTheme({
    palette: {
      background: {
        primary: '#1E2328',
      },
      text: {
        lightgrey: '#E0E4E8',
        bg: '#1E2328',
      },
      accent: {
        accent1: '#E3AD87',
        accent2: '#A16042',
        accent3: '#FF9B54',
      }
    }
  })

  return (
    <>
      
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='resume' element={<Resume />}></Route>
      </Routes>


      </BrowserRouter>
      <Outlet />
    </>
  )
}

export default App
