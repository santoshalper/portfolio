import { Outlet } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'

function App() {
  return (
    <div className='top'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
