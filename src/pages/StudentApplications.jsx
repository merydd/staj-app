import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const StudentApplications = () => {
  // Örnek başvuru verileri
  const applications = [
    {
      id: 1,
      company: 'ABC Teknoloji',
      position: 'Yazılım Geliştirme Stajyeri',
      status: 'Beklemede',
      appliedDate: '2024-01-15',
    },
    {
      id: 2,
      company: 'XYZ Yazılım',
      position: 'Frontend Developer Stajyeri',
      status: 'Onaylandı',
      appliedDate: '2024-01-10',
    },
    {
      id: 3,
      company: 'DEF Mühendislik',
      position: 'Full Stack Developer Stajyeri',
      status: 'Reddedildi',
      appliedDate: '2024-01-05',
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Onaylandı':
        return <span className="badge badge-success">Onaylandı</span>
      case 'Reddedildi':
        return <span className="badge" style={{ background: '#fee2e2', color: '#991b1b' }}>Reddedildi</span>
      default:
        return <span className="badge badge-warning">Beklemede</span>
    }
  }

  return (
    <div>
      <Navbar userType="student" />
      <div className="container">
        <div className="page-header">
          <h1>Başvurularım</h1>
          <p>Yaptığınız başvuruları görüntüleyin ve durumlarını takip edin</p>
        </div>

        {applications.length === 0 ? (
          <div className="card">
            <p style={{ textAlign: 'center', color: '#6b7280' }}>
              Henüz başvuru yapmadınız. <Link to="/student/internships">Staj ilanlarına</Link> göz atabilirsiniz.
            </p>
          </div>
        ) : (
          <div>
            {applications.map((application) => (
              <div key={application.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3>{application.position}</h3>
                    <p style={{ color: '#6b7280', marginTop: '5px' }}>{application.company}</p>
                    <p style={{ color: '#6b7280', marginTop: '10px', fontSize: '14px' }}>
                      Başvuru Tarihi: {application.appliedDate}
                    </p>
                  </div>
                  <div>
                    {getStatusBadge(application.status)}
                  </div>
                </div>
                <div style={{ marginTop: '15px' }}>
                  <Link to={`/internship/${application.id}`} className="btn btn-primary" style={{ fontSize: '14px', padding: '8px 16px' }}>
                    Detayları Görüntüle
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentApplications

