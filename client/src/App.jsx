import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from './pages/Home.jsx'

// Lazy load login pages — app won't crash if they don't exist yet
const CitizenLogin = lazy(() => import('./pages/citizen/CitizenLogin.jsx'))
const AdminLogin   = lazy(() => import('./pages/admin/AdminLogin.jsx'))

// Fallback shown while the page component loads
function PageLoader() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#020817',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#3db4f2',
      fontFamily: 'sans-serif',
      fontSize: '14px',
      letterSpacing: '0.1em',
    }}>
      Loading...
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/citizen/login" element={<CitizenLogin />} />
        <Route path="/admin/login"   element={<AdminLogin />} />
      </Routes>
    </Suspense>
  )
}

export default App