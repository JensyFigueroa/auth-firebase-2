import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { AuthProvider } from './context/authContext'
import { ProtectRoute } from './components/ProtectRoute'

function App() {

  return (
    <div className='bg-gray-50 h-screen text-black flex'>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<ProtectRoute><Home /></ProtectRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
