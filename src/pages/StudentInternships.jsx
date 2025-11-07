import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const StudentInternships = () => {
  // Örnek staj ilanları
  const internships = [
    {
      id: 1,
      company: 'ABC Teknoloji',
      position: 'Yazılım Geliştirme Stajyeri',
      location: 'İstanbul',
      duration: '3 Ay',
      type: 'Yaz Stajı',
      description: 'React.js ve Node.js kullanarak web uygulamaları geliştirme konusunda staj imkanı.',
      requirements: ['React.js', 'JavaScript', 'HTML/CSS'],
      postedDate: '2024-01-20',
    },
    {
      id: 2,
      company: 'XYZ Yazılım',
      position: 'Frontend Developer Stajyeri',
      location: 'Ankara',
      duration: '6 Ay',
      type: 'Uzun Dönem Staj',
      description: 'Modern web teknolojileri ile kullanıcı arayüzü geliştirme stajı.',
      requirements: ['React.js', 'TypeScript', 'CSS'],
      postedDate: '2024-01-18',
    },
    {
      id: 3,
      company: 'DEF Mühendislik',
      position: 'Full Stack Developer Stajyeri',
      location: 'İzmir',
      duration: '3 Ay',
      type: 'Yaz Stajı',
      description: 'Full stack web geliştirme konusunda kapsamlı staj programı.',
      requirements: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      postedDate: '2024-01-15',
    },
  ]

  return (
    <div>
      <Navbar userType="student" />
      <div className="container">
        <div className="page-header">
          <h1>Staj İlanları</h1>
          <p>Tüm staj ilanlarını görüntüleyin ve başvuru yapın</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="İlan ara..."
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
              }}
            />
        </div>

        {internships.length === 0 ? (
          <div className="card">
            <p style={{ textAlign: 'center', color: '#6b7280' }}>
              Şu anda yayında olan staj ilanı bulunmamaktadır.
            </p>
          </div>
        ) : (
          <div>
            {internships.map((internship) => (
              <div key={internship.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <div>
                    <h3>{internship.position}</h3>
                  <p style={{ color: '#2563eb', fontWeight: '600', marginTop: '5px' }}>
                    {internship.company}
                  </p>
                  </div>
                  <span className="badge badge-info">{internship.type}</span>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <p style={{ color: '#6b7280' }}>{internship.description}</p>
                </div>

                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', flexWrap: 'wrap' }}>
                  <div>
                    <strong>📍 Konum:</strong> {internship.location}
                  </div>
                  <div>
                    <strong>⏱️ Süre:</strong> {internship.duration}
                  </div>
                  <div>
                    <strong>📅 Yayın Tarihi:</strong> {internship.postedDate}
                  </div>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <strong>Gereksinimler:</strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                    {internship.requirements.map((req, index) => (
                      <span key={index} className="badge badge-info">{req}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <Link to={`/internship/${internship.id}`} className="btn btn-primary">
                    Detayları Görüntüle ve Başvur
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

export default StudentInternships

