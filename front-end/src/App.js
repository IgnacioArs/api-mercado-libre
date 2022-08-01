import logo from './logo.svg';
import './App.css';
//importamos react-router-dom
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
//IMPORTAMOS LOS COMPONENTES
import NavbarRoutes from './Layouts/NavbarRoutes';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import Productos from './Components/Productos';
//componentes de acceso
import Login from './Components/Access/Login';
import Registro from './Components/Access/Registro';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavbarRoutes/>}>
              
         
           {/*  RUTAS DE ACCESO */}
           <Route path='registro' element={<Registro/>} />
           <Route path='login' element={<Login/>} />
           {/*  LAS OTRAS RUTAS */}
            <Route path='about' element={<About/>} />
            <Route path='home' element={<Home/>} />
            <Route path='contact' element={<Contact/>}/>
            <Route path='productos' element={<Productos/>}/>
         {/*   RUTAS QUE NO EXISTEN */}
            <Route path='*' element={<Navigate replace to={"/"}/>}/>
            </Route>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
