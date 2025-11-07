import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const CompanyDashboard = () => {
  return (
    <div>
      <Navbar userType="company" />
      <div className="container">
        <div className="page-header">
          <h1>Firma Paneli</h1>
          <p>Hoş geldiniz! Staj ilanları yayımlayabilir ve başvuruları yönetebilirsiniz.</p>
        </div>

        <div className="grid">
          <Link to="/company/profile" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>🏢 Firma Profili</h3>
            <p>Firma bilgilerinizi görüntüleyin ve düzenleyin</p>
          </Link>

          <Link to="/company/internships" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>📢 Staj İlanları</h3>
            <p>İlan yayımlayın ve yönetin</p>
          </Link>

          <Link to="/company/about" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>ℹ️ Hakkında</h3>
            <p>Staj Durağı uygulaması hakkında bilgi</p>
          </Link>
        </div>

        <div className="card" style={{ marginTop: '30px' }}>
          <h3>Hızlı İstatistikler</h3>
          <div className="grid" style={{ marginTop: '20px' }}>
            <div>
              <h4 style={{ color: '#2563eb' }}>0</h4>
              <p>Aktif İlan</p>
            </div>
            <div>
              <h4 style={{ color: '#10b981' }}>0</h4>
              <p>Toplam Başvuru</p>
            </div>
            <div>
              <h4 style={{ color: '#f59e0b' }}>0</h4>
              <p>Bekleyen Başvuru</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDashboard

