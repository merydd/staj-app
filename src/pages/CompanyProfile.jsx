import { useState } from 'react'
import Navbar from '../components/Navbar'

const CompanyProfile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    companyName: 'ABC Teknoloji A.Ş.',
    email: 'info@abcteknoloji.com',
    phone: '+90 212 123 4567',
    address: 'İstanbul, Türkiye',
    website: 'www.abcteknoloji.com',
    sector: 'Yazılım ve Teknoloji',
    employeeCount: '50-100',
  })

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = () => {
    setIsEditing(false)
    // API'ye kayıt gönderilecek
  }

  return (
    <div>
      <Navbar userType="company" />
      <div className="container">
        <div className="page-header">
          <h1>Firma Profili</h1>
          <p>Firma bilgilerinizi görüntüleyin ve düzenleyin</p>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Firma Bilgileri</h2>
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
            <label>Firma Adı</label>
            {isEditing ? (
              <input
                type="text"
                name="companyName"
                value={profile.companyName}
                onChange={handleChange}
              />
            ) : (
              <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{profile.companyName}</p>
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

          <div className="input-group">
            <label>Web Sitesi</label>
            {isEditing ? (
              <input
                type="url"
                name="website"
                value={profile.website}
                onChange={handleChange}
              />
            ) : (
              <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{profile.website}</p>
            )}
          </div>

          <div className="input-group">
            <label>Sektör</label>
            {isEditing ? (
              <select name="sector" value={profile.sector} onChange={handleChange}>
                <option>Yazılım ve Teknoloji</option>
                <option>Üretim</option>
                <option>Hizmet</option>
                <option>Diğer</option>
              </select>
            ) : (
              <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{profile.sector}</p>
            )}
          </div>

          <div className="input-group">
            <label>Çalışan Sayısı</label>
            {isEditing ? (
              <select name="employeeCount" value={profile.employeeCount} onChange={handleChange}>
                <option>1-10</option>
                <option>11-50</option>
                <option>50-100</option>
                <option>100-500</option>
                <option>500+</option>
              </select>
            ) : (
              <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px' }}>{profile.employeeCount}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile

