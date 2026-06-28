import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/AboutPage';
import Login from './pages/LoginPage';
function App()  {
return (
    <>
    <Routes> 
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Login' element={<Login/>}/>
    </Routes>
    </>
)
}

export default App;