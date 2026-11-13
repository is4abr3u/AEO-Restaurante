import './App.css'
//import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRouter'
import Atendentes from './pages/Atendentes'
import SignIn from './pages/SignIn'
import Mesas from './pages/mesas'
import Pedidos from './pages/Pedidos'
import Bebidas from './pages/bebidas'
import Pratos from './pages/pratos'

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Login />} /> */}
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Mesas' element={<Mesas />} />
        <Route path='/' element={<Pedidos />} />
        <Route path='/Bebidas' element={<Bebidas />} />
        <Route path='/Pratos' element={<Pratos />} />
        
        <Route element={<PrivateRoute />}>
          <Route path='/Atendentes' element={<Atendentes />} />
        </Route>
        
      </Routes>
      <Footer />
    </>
  )
}

export default App