import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import JobBoard from './pages/JobBoard'
import ForVeterans from './pages/ForVeterans'
import ForEmployers from './pages/ForEmployers'
import About from './pages/About'
import Donate from './pages/Donate'
import AdminLogin from './pages/admin/AdminLogin'

export default function App() {
  return (
    <div className="min-h-screen bg-sand-0 text-ink-body flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-board" element={<JobBoard />} />
          <Route path="/for-veterans" element={<ForVeterans />} />
          <Route path="/for-employers" element={<ForEmployers />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}