import './App.css'
import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'
import Atendentes from './pages/Atendentes'
import SignIn from './pages/SignIn'
import Mesas from './pages/Mesas'
import Pedidos from './pages/Pedidos'
import Bebidas from './pages/Bebidas'
import Pratos from './pages/Pratos'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/mesas' element={<Mesas />} />
        <Route path='/pedidos' element={<Pedidos />} />
        <Route path='/bebidas' element={<Bebidas />} />
        <Route path='/pratos' element={<Pratos />} />
        
        <Route element={<PrivateRoute />}>
          <Route path='/atendentes' element={<Atendentes />} />

        </Route>
        
      </Routes>
      <Footer />
    </>
  )
}

export default App