import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const StudentDashboard = () => {
  return (
    <div>
      <Navbar userType="student" />
      <div className="container">
        <div className="page-header">
          <h1>Öğrenci Paneli</h1>
          <p>Hoş geldiniz! Staj ilanlarını görüntüleyebilir ve başvurularınızı takip edebilirsiniz.</p>
        </div>

        <div className="grid">
          <Link to="/student/profile" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>📋 Profilim</h3>
            <p>Kişisel bilgilerinizi görüntüleyin ve düzenleyin</p>
          </Link>

          <Link to="/student/resume" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>📄 Özgeçmişim</h3>
            <p>Özgeçmişinizi görüntüleyin ve güncelleyin</p>
          </Link>

          <Link to="/student/internships" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>💼 Staj İlanları</h3>
            <p>Tüm staj ilanlarını görüntüleyin</p>
          </Link>

          <Link to="/student/applications" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>📝 Başvurularım</h3>
            <p>Yaptığınız başvuruları takip edin</p>
          </Link>

          <Link to="/student/announcements" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>📢 Duyurular</h3>
            <p>Kariyer etkinlikleri ve önemli duyurular</p>
          </Link>

          <Link to="/student/about" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>ℹ️ Hakkında</h3>
            <p>Staj Durağı uygulaması hakkında bilgi</p>
          </Link>
        </div>

        <div className="card" style={{ marginTop: '30px' }}>
          <h3>Hızlı İstatistikler</h3>
          <div className="grid" style={{ marginTop: '20px' }}>
            <div>
              <h4 style={{ color: '#2563eb' }}>0</h4>
              <p>Aktif Başvuru</p>
            </div>
            <div>
              <h4 style={{ color: '#10b981' }}>0</h4>
              <p>Görüntülenen İlan</p>
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

export default StudentDashboard

