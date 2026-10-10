import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from './redux/authSlice'
import Login from './components/login/Login'
import DashBoard from './components/cards/DashBoard'

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <span className="app-logo-icon">💳</span>
          <h2>Credit Card Portal</h2>
        </div>
        {isAuthenticated && (
          <button className="logout-btn" onClick={() => dispatch(logout())}>
            Logout
          </button>
        )}
      </header>
      <main className="app-main">
        {!isAuthenticated && <Login />}
        {isAuthenticated && <DashBoard />}
      </main>
    </div>
  )
}

export default App
