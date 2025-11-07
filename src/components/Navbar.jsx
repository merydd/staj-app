import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ userType }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  const studentLinks = [
    { path: '/student', label: 'Ana Sayfa' },
    { path: '/student/internships', label: 'Staj İlanları' },
    { path: '/student/applications', label: 'Başvurularım' },
    { path: '/student/announcements', label: 'Duyurular' },
    { path: '/student/about', label: 'Hakkında' },
  ]

  const companyLinks = [
    { path: '/company', label: 'Ana Sayfa' },
    { path: '/company/internships', label: 'İlanlarım' },
    { path: '/company/about', label: 'Hakkında' },
  ]

  const links = userType === 'student' ? studentLinks : companyLinks

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to={userType === 'student' ? '/student' : '/company'} className="navbar-brand">
          Staj Durağı
        </Link>
        <ul className="navbar-nav">
          {links.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
          <li>
            <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '14px' }}>
              Çıkış Yap
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

