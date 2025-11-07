import { useState } from 'react'
import Navbar from '../components/Navbar'

const CompanyInternships = () => {
  const [showForm, setShowForm] = useState(false)
  const [internships, setInternships] = useState([
    {
      id: 1,
      position: 'Yazılım Geliştirme Stajyeri',
      location: 'İstanbul',
      duration: '3 Ay',
      type: 'Yaz Stajı',
      status: 'Aktif',
      applications: 5,
    },
  ])
  const [formData, setFormData] = useState({
    position: '',
    description: '',
    location: '',
    duration: '',
    type: 'Yaz Stajı',
    requirements: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newInternship = {
      id: internships.length + 1,
      ...formData,
      status: 'Aktif',
      applications: 0,
    }
    setInternships([...internships, newInternship])
    setFormData({
      position: '',
      description: '',
      location: '',
      duration: '',
      type: 'Yaz Stajı',
      requirements: '',
    })
    setShowForm(false)
  }

  return (
    <div>
      <Navbar userType="company" />
      <div className="container">
        <div className="page-header">
          <h1>Staj İlanları</h1>
          <p>Staj ilanları yayımlayın ve yönetin</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => setShowForm(!showForm)} className="btn btn-primary">
            {showForm ? 'İlanları Görüntüle' : 'Yeni İlan Yayımla'}
          </button>
        </div>

        {showForm ? (
          <div className="card">
            <h2>Yeni Staj İlanı Yayımla</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="position">Pozisyon *</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Örn: Yazılım Geliştirme Stajyeri"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="description">Açıklama *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="İlan açıklaması..."
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="location">Konum *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Örn: İstanbul"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="duration">Süre *</label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="Örn: 3 Ay"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="type">Staj Tipi *</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="Yaz Stajı">Yaz Stajı</option>
                  <option value="Uzun Dönem Staj">Uzun Dönem Staj</option>
                  <option value="İşletmede Mesleki Eğitim">İşletmede Mesleki Eğitim</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="requirements">Gereksinimler</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Her satıra bir gereksinim yazın..."
                  rows="4"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                İlanı Yayımla
              </button>
            </form>
          </div>
        ) : (
          <div>
            {internships.length === 0 ? (
              <div className="card">
                <p style={{ textAlign: 'center', color: '#6b7280' }}>
                  Henüz ilan yayımlamadınız. Yeni ilan yayımlamak için yukarıdaki butona tıklayın.
                </p>
              </div>
            ) : (
              internships.map((internship) => (
                <div key={internship.id} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <div>
                      <h3>{internship.position}</h3>
                      <p style={{ color: '#6b7280', marginTop: '5px' }}>
                        {internship.location} • {internship.duration}
                      </p>
                    </div>
                    <span className="badge badge-success">{internship.status}</span>
                  </div>

                  <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
                    <div>
                      <strong>Başvuru Sayısı:</strong> {internship.applications}
                    </div>
                    <div>
                      <strong>Tip:</strong> {internship.type}
                    </div>
                  </div>

                  <div style={{ marginTop: '15px' }}>
                    <button className="btn btn-primary" style={{ marginRight: '10px' }}>
                      Başvuruları Görüntüle
                    </button>
                    <button className="btn btn-secondary">
                      Düzenle
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CompanyInternships

