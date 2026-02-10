
import './App.css'
import {Routes,Route,NavLink} from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './assets/pages/About.jsx'
import Home from './assets/pages/Home.jsx'
import NotFound from './assets/pages/NotFound.jsx'
import Company from './assets/pages/Company.jsx'
import AboutDetail from './assets/pages/AboutDetail.jsx'
import Board from './assets/pages/Board.jsx'
import BoardDetail from './assets/pages/BoardDetail.jsx'


function App() {


  return (
    <div>
    
     <Header/> 
      <h1></h1>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/about/:id' element={<AboutDetail/>}/>
      <Route path='/company' element={<Company/>}/>
      <Route path='/board' element={<Board/>}/>
      <Route path='/board/:id' element={<BoardDetail/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
