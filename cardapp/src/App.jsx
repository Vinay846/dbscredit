import { useState } from 'react'
import './App.css'
import Login from './components/login/Login'
import DashBoard from './components/cards/DashBoard'

function App() {
  const [islogin, setIslogin] = useState(false);
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <span className="app-logo-icon">💳</span>
          <h2>Credit Card Portal</h2>
        </div>
        {islogin && (
          <button className="logout-btn" onClick={() => setIslogin(false)}>
            Logout
          </button>
        )}
      </header>
      <main className="app-main">
        {!islogin && <Login setIslogin={setIslogin} />}
        {islogin && <DashBoard />}
      </main>
    </div>
  )
}

export default App
