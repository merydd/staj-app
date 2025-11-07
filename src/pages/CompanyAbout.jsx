import { useState } from 'react'
import Navbar from '../components/Navbar'

const CompanyAbout = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [about, setAbout] = useState({
    description: 'ABC Teknoloji, yazılım geliştirme ve teknoloji çözümleri sunan lider bir firmadır. 2010 yılından beri sektörde faaliyet göstermekteyiz.',
    mission: 'En iyi yazılım çözümlerini sunarak müşterilerimizin başarısına katkıda bulunmak.',
    vision: 'Teknoloji alanında öncü bir firma olmak.',
  })

  const handleChange = (e) => {
    setAbout({
      ...about,
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
          <h1>Firma Hakkında</h1>
          <p>Firma hakkında bilgileri düzenleyin</p>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Firma Hakkında Bilgiler</h2>
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
            <label>Firma Açıklaması</label>
            {isEditing ? (
              <textarea
                name="description"
                value={about.description}
                onChange={handleChange}
                rows="4"
              />
            ) : (
              <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px', lineHeight: '1.8' }}>
                {about.description}
              </p>
            )}
          </div>

          <div className="input-group">
            <label>Misyon</label>
            {isEditing ? (
              <textarea
                name="mission"
                value={about.mission}
                onChange={handleChange}
                rows="3"
              />
            ) : (
              <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px', lineHeight: '1.8' }}>
                {about.mission}
              </p>
            )}
          </div>

          <div className="input-group">
            <label>Vizyon</label>
            {isEditing ? (
              <textarea
                name="vision"
                value={about.vision}
                onChange={handleChange}
                rows="3"
              />
            ) : (
              <p style={{ padding: '12px', background: '#f9fafb', borderRadius: '8px', lineHeight: '1.8' }}>
                {about.vision}
              </p>
            )}
          </div>
        </div>

        <div className="card" style={{ marginTop: '30px' }}>
          <h2>Staj Durağı Hakkında</h2>
          <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
            Staj Durağı, üniversite öğrencilerinin staj yeri bulmakta yaşadıkları zorlukları kolaylaştırmak amacıyla
            geliştirilmiş bir platformdur. Firmalar olarak bu platform üzerinden staj ilanları yayımlayabilir ve
            uygun öğrencilerle buluşabilirsiniz.
          </p>

          <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Proje Ekibi</h3>
          <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '8px', marginTop: '15px' }}>
            <p><strong>Geliştiriciler:</strong> Meryem DURDAĞI, Talha MERCAN</p>
            <p><strong>Danışman:</strong> Doç.Dr. Özden ASLAN ÇATALTEPE</p>
            <p><strong>Üniversite:</strong> İstanbul Gedik Üniversitesi</p>
            <p><strong>Program:</strong> TÜBİTAK-2209-A Üniversite Öğrencileri Araştırma Projeleri Desteği Programı</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyAbout

