// import reactLogo from './assets/icons/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Aside from './layouts/Aside'

function App() {

  return (
    <div className="app-layout">
      <Header />
      <div className="pages-layout container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Aside />
      <Footer />
    </div>
  )
}

function NotFoundPage() {
  return <HomePage />
}

export default App
