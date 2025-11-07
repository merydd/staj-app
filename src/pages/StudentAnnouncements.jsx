import Navbar from '../components/Navbar'

const StudentAnnouncements = () => {
  // Örnek duyurular
  const announcements = [
    {
      id: 1,
      title: '2024 Yaz Stajı Başvuruları Başladı',
      content: '2024 yaz dönemi staj başvuruları başlamıştır. Başvurularınızı en geç 15 Mart tarihine kadar tamamlayınız.',
      date: '2024-01-20',
      type: 'Önemli',
    },
    {
      id: 2,
      title: 'Kariyer Günleri Etkinliği',
      content: 'Üniversitemizde 25-26 Şubat tarihlerinde Kariyer Günleri etkinliği düzenlenecektir. Tüm öğrencilerimiz davetlidir.',
      date: '2024-01-18',
      type: 'Etkinlik',
    },
    {
      id: 3,
      title: 'İşletmede Mesleki Eğitim Programı',
      content: 'Uzun dönem staj (İşletmede Mesleki Eğitim) programı için başvurular devam etmektedir.',
      date: '2024-01-15',
      type: 'Bilgilendirme',
    },
  ]

  const getTypeBadge = (type) => {
    switch (type) {
      case 'Önemli':
        return <span className="badge" style={{ background: '#fee2e2', color: '#991b1b' }}>Önemli</span>
      case 'Etkinlik':
        return <span className="badge badge-success">Etkinlik</span>
      default:
        return <span className="badge badge-info">Bilgilendirme</span>
    }
  }

  return (
    <div>
      <Navbar userType="student" />
      <div className="container">
        <div className="page-header">
          <h1>Duyurular</h1>
          <p>Kariyer etkinlikleri ve önemli duyurular</p>
        </div>

        {announcements.length === 0 ? (
          <div className="card">
            <p style={{ textAlign: 'center', color: '#6b7280' }}>
              Henüz duyuru bulunmamaktadır.
            </p>
          </div>
        ) : (
          <div>
            {announcements.map((announcement) => (
              <div key={announcement.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <h3>{announcement.title}</h3>
                  {getTypeBadge(announcement.type)}
                </div>
                <p style={{ color: '#6b7280', marginBottom: '10px' }}>
                  {announcement.content}
                </p>
                <p style={{ color: '#6b7280', fontSize: '14px' }}>
                  📅 {announcement.date}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default StudentAnnouncements

