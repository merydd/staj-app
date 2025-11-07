import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const InternshipDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [applied, setApplied] = useState(false)

  // Örnek ilan detayı
  const internship = {
    id: parseInt(id),
    company: 'ABC Teknoloji',
    position: 'Yazılım Geliştirme Stajyeri',
    location: 'İstanbul',
    duration: '3 Ay',
    type: 'Yaz Stajı',
    description: 'React.js ve Node.js kullanarak web uygulamaları geliştirme konusunda staj imkanı. Ekip çalışması ve modern yazılım geliştirme süreçlerini öğrenme fırsatı sunuyoruz.',
    requirements: ['React.js', 'JavaScript', 'HTML/CSS', 'Node.js', 'Git'],
    responsibilities: [
      'Web uygulamaları geliştirme',
      'Kod yazma ve test etme',
      'Ekip toplantılarına katılım',
      'Proje dokümantasyonu hazırlama',
    ],
    benefits: [
      'Mentörlük desteği',
      'Esnek çalışma saatleri',
      'Ulaşım desteği',
      'Sertifika',
    ],
    postedDate: '2024-01-20',
    applicationDeadline: '2024-02-15',
  }

  const handleApply = () => {
    setApplied(true)
    // API'ye başvuru gönderilecek
    setTimeout(() => {
      navigate('/student/applications')
    }, 2000)
  }

  return (
    <div>
      <Navbar userType="student" />
      <div className="container">
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => navigate(-1)} className="btn btn-secondary">
            ← Geri Dön
          </button>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
              <h1>{internship.position}</h1>
              <p style={{ color: '#2563eb', fontWeight: '600', fontSize: '20px', marginTop: '10px' }}>
                {internship.company}
              </p>
            </div>
            <span className="badge badge-info">{internship.type}</span>
          </div>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
            <div>
              <strong>📍 Konum:</strong> {internship.location}
            </div>
            <div>
              <strong>⏱️ Süre:</strong> {internship.duration}
            </div>
            <div>
              <strong>📅 Yayın Tarihi:</strong> {internship.postedDate}
            </div>
            <div>
              <strong>⏰ Son Başvuru:</strong> {internship.applicationDeadline}
            </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h2>İlan Açıklaması</h2>
            <p style={{ lineHeight: '1.8', marginTop: '10px' }}>{internship.description}</p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h2>Gereksinimler</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
              {internship.requirements.map((req, index) => (
                <span key={index} className="badge badge-info">{req}</span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h2>Sorumluluklar</h2>
            <ul style={{ lineHeight: '2', paddingLeft: '20px', marginTop: '10px' }}>
              {internship.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h2>İmkanlar</h2>
            <ul style={{ lineHeight: '2', paddingLeft: '20px', marginTop: '10px' }}>
              {internship.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e5e7eb' }}>
            {applied ? (
              <div style={{ background: '#d1fae5', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ color: '#065f46', fontWeight: '600' }}>
                  ✅ Başvurunuz başarıyla gönderildi! Başvurularım sayfasına yönlendiriliyorsunuz...
                </p>
              </div>
            ) : (
              <button onClick={handleApply} className="btn btn-primary" style={{ width: '100%', fontSize: '18px', padding: '15px' }}>
                Başvur
              </button>
            )}
          </div>
        </div>

        <div className="card" style={{ marginTop: '20px' }}>
          <h2>Firma Hakkında</h2>
          <p style={{ lineHeight: '1.8', marginTop: '10px' }}>
            ABC Teknoloji, yazılım geliştirme ve teknoloji çözümleri sunan lider bir firmadır. 
            Detaylı bilgi için <Link to="/student/about">firma hakkında</Link> sayfasını ziyaret edebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  )
}

export default InternshipDetail

