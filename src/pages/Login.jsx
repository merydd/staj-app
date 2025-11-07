import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const [userType, setUserType] = useState('student')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Basit authentication simülasyonu
    // Gerçek uygulamada backend API'ye istek gönderilecek
    if (userType === 'student') {
      navigate('/student')
    } else {
      navigate('/company')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Staj Durağı</h1>
          <p>Üniversite öğrencileri için staj yeri bulma platformu</p>
        </div>

        <div className="user-type-selector">
          <button
            className={`type-btn ${userType === 'student' ? 'active' : ''}`}
            onClick={() => setUserType('student')}
          >
            Öğrenci Girişi
          </button>
          <button
            className={`type-btn ${userType === 'company' ? 'active' : ''}`}
            onClick={() => setUserType('company')}
          >
            Firma Girişi
          </button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ornek@universite.edu.tr"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Giriş Yap
          </button>
        </form>

        <div className="login-footer">
          <p>Hesabınız yok mu? <a href="#register">Kayıt Ol</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login

