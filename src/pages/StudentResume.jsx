import { useState } from 'react'
import Navbar from '../components/Navbar'

const StudentResume = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [resume, setResume] = useState({
    summary: 'Bilgisayar Mühendisliği öğrencisi, web geliştirme ve yazılım alanında deneyimli.',
    education: [
      {
        school: 'İstanbul Gedik Üniversitesi',
        department: 'Bilgisayar Mühendisliği',
        degree: 'Lisans',
        year: '2021 - Devam Ediyor',
      },
    ],
    experience: [
      {
        company: 'ABC Teknoloji',
        position: 'Yazılım Geliştirme Stajyeri',
        duration: 'Yaz 2023',
        description: 'React.js ve Node.js kullanarak web uygulamaları geliştirdim.',
      },
    ],
    skills: ['React.js', 'JavaScript', 'HTML/CSS', 'Node.js', 'Python'],
    languages: [
      { language: 'Türkçe', level: 'Ana Dil' },
      { language: 'İngilizce', level: 'İleri Seviye' },
    ],
  })

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = () => {
    setIsEditing(false)
    // API'ye kayıt gönderilecek
  }

  return (
    <div>
      <Navbar userType="student" />
      <div className="container">
        <div className="page-header">
          <h1>Özgeçmişim</h1>
          <p>Özgeçmiş bilgilerinizi görüntüleyin ve güncelleyin</p>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Özgeçmiş Bilgileri</h2>
            {!isEditing ? (
              <button onClick={() => setIsEditing(true)} className="btn btn-primary">
                Düzenle
              </button>
            ) : (
              <div>
                <button onClick={handleSave} className="btn btn-primary" style={{ marginRight: '10px' }}>
                  Kaydet
                </button>
                <button onClick={() => setIsEditing(false)} className="btn btn-secondary">
                  İptal
                </button>
              </div>
            )}
          </div>

          <div className="input-group">
            <label>Özet</label>
            {isEditing ? (
              <textarea
                name="summary"
                value={resume.summary}
                onChange={handleChange}
                rows="3"
              />
            ) : (
              <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{resume.summary}</p>
            )}
          </div>

          <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Eğitim</h3>
          {resume.education.map((edu, index) => (
            <div key={index} className="card" style={{ marginBottom: '15px', background: '#f9fafb' }}>
              <h4>{edu.school}</h4>
              <p><strong>Bölüm:</strong> {edu.department}</p>
              <p><strong>Derece:</strong> {edu.degree}</p>
              <p><strong>Yıl:</strong> {edu.year}</p>
            </div>
          ))}

          <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Deneyim</h3>
          {resume.experience.map((exp, index) => (
            <div key={index} className="card" style={{ marginBottom: '15px', background: '#f9fafb' }}>
              <h4>{exp.position} - {exp.company}</h4>
              <p><strong>Süre:</strong> {exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}

          <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Yetenekler</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {resume.skills.map((skill, index) => (
              <span key={index} className="badge badge-info">{skill}</span>
            ))}
          </div>

          <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Diller</h3>
          {resume.languages.map((lang, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <strong>{lang.language}:</strong> {lang.level}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentResume

