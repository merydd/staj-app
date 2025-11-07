import { useState } from 'react'
import Navbar from '../components/Navbar'

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Meryem DURDAĞI',
    email: 'meryem@universite.edu.tr',
    studentNumber: '2021001',
    department: 'Bilgisayar Mühendisliği',
    grade: '3. Sınıf',
    phone: '+90 555 123 4567',
    address: 'İstanbul, Türkiye',
  })

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = () => {
    setIsEditing(false)
    // Burada API'ye kayıt gönderilecek
  }

  return (
    <div>
      <Navbar userType="student" />
      <div className="container">
        <div className="page-header">
          <h1>Profilim</h1>
          <p>Kişisel bilgilerinizi görüntüleyin ve düzenleyin</p>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Kişisel Bilgiler</h2>
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
            <label>Ad Soyad</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            ) : (
              <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{profile.name}</p>
            )}
          </div>

          <div className="input-group">
            <label>E-posta</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            ) : (
              <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{profile.email}</p>
            )}
          </div>

          <div className="input-group">
            <label>Öğrenci Numarası</label>
            <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{profile.studentNumber}</p>
          </div>

          <div className="input-group">
            <label>Bölüm</label>
            {isEditing ? (
              <select name="department" value={profile.department} onChange={handleChange}>
                <option>Bilgisayar Mühendisliği</option>
                <option>Elektrik Mühendisliği</option>
                <option>Makine Mühendisliği</option>
                <option>Endüstri Mühendisliği</option>
              </select>
            ) : (
              <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{profile.department}</p>
            )}
          </div>

          <div className="input-group">
            <label>Sınıf</label>
            {isEditing ? (
              <select name="grade" value={profile.grade} onChange={handleChange}>
                <option>1. Sınıf</option>
                <option>2. Sınıf</option>
                <option>3. Sınıf</option>
                <option>4. Sınıf</option>
              </select>
            ) : (
              <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{profile.grade}</p>
            )}
          </div>

          <div className="input-group">
            <label>Telefon</label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />
            ) : (
              <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{profile.phone}</p>
            )}
          </div>

          <div className="input-group">
            <label>Adres</label>
            {isEditing ? (
              <textarea
                name="address"
                value={profile.address}
                onChange={handleChange}
              />
            ) : (
              <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{profile.address}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile

