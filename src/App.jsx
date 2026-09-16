import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import AddVehicle from './pages/AddVehicle'
import EditVehicle from './pages/EditVehicle'
import MyVehicles from './pages/MyVehicles'
import MyBookings from './pages/MyBookings'
import Wishlist from './pages/Wishlist'
import Profile from './pages/Profile'
import Owners from './pages/Owners'
import Settings from './pages/Settings'

function AppContent() {
  const { user, loading } = useAuth()
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  if (loading) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="splash-logo">
          <svg width="72" height="72" viewBox="0 0 512 512" className="mb-4 drop-shadow">
            <rect width="512" height="512" rx="80" fill="#FFD700"/>
            <rect x="64" y="192" width="384" height="192" rx="32" fill="#1a1a1a"/>
            <rect x="96" y="256" width="96" height="64" rx="8" fill="#FFD700"/>
            <rect x="224" y="256" width="96" height="64" rx="8" fill="#FFD700"/>
            <rect x="352" y="256" width="96" height="64" rx="8" fill="#FFD700"/>
            <circle cx="128" cy="352" r="40" fill="#1a1a1a" stroke="#FFD700" strokeWidth="4"/>
            <circle cx="384" cy="352" r="40" fill="#1a1a1a" stroke="#FFD700" strokeWidth="4"/>
          </svg>
        </div>
        <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>GetAuto</p>
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Vehicle Rental Marketplace</p>
      </div>
    )
  }

  if (!user) {
    return <Login theme={theme} />
  }

  if (!user.name || !user.role) {
    return <Login theme={theme} />
  }

  const bg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'

  return (
    <div className={`min-h-screen ${bg} ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      <Navbar theme={theme} />
      <main className="pb-20">
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/add-vehicle" element={user.role === 'vendor' ? <AddVehicle theme={theme} /> : <Navigate to="/" />} />
          <Route path="/edit-vehicle/:id" element={user.role === 'vendor' ? <EditVehicle theme={theme} /> : <Navigate to="/" />} />
          <Route path="/my-vehicles" element={user.role === 'vendor' ? <MyVehicles theme={theme} /> : <Navigate to="/" />} />
          <Route path="/my-bookings" element={<MyBookings theme={theme} />} />
          <Route path="/wishlist" element={user.role === 'customer' ? <Wishlist theme={theme} /> : <Navigate to="/" />} />
          <Route path="/profile" element={<Profile theme={theme} />} />
          <Route path="/owners" element={<Owners theme={theme} />} />
          <Route path="/settings" element={<Settings theme={theme} setTheme={setTheme} />} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}
