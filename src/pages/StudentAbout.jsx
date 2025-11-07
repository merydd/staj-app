import Navbar from '../components/Navbar'

const StudentAbout = () => {
  return (
    <div>
      <Navbar userType="student" />
      <div className="container">
        <div className="page-header">
          <h1>Staj Durağı Hakkında</h1>
          <p>Uygulama hakkında detaylı bilgi</p>
        </div>

        <div className="card">
          <h2>Proje Hakkında</h2>
          <p style={{ marginTop: '15px', lineHeight: '1.8' }}>
            Staj Durağı, üniversite öğrencilerinin staj yeri bulmakta yaşadıkları zorlukları kolaylaştırmak amacıyla
            geliştirilmiş bir platformdur. Bu uygulama sayesinde öğrenciler, kendi alanları ile ilgili staj yapabilecekleri
            firmalara kolayca ulaşabilirler.
          </p>

          <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Özellikler</h3>
          <ul style={{ lineHeight: '2', paddingLeft: '20px' }}>
            <li>Staj ilanlarını görüntüleme ve başvuru yapma</li>
            <li>Profil ve özgeçmiş yönetimi</li>
            <li>Başvuru durumu takibi</li>
            <li>Firma bilgilerini görüntüleme</li>
            <li>Kariyer etkinlikleri ve duyurular</li>
          </ul>

          <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>Proje Ekibi</h3>
          <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '8px', marginTop: '15px' }}>
            <p><strong>Geliştiriciler:</strong> Meryem DURDAĞI, Talha MERCAN</p>
            <p><strong>Danışman:</strong> Doç.Dr. Özden ASLAN ÇATALTEPE</p>
            <p><strong>Üniversite:</strong> İstanbul Gedik Üniversitesi</p>
            <p><strong>Program:</strong> TÜBİTAK-2209-A Üniversite Öğrencileri Araştırma Projeleri Desteği Programı</p>
          </div>

          <h3 style={{ marginTop: '30px', marginBottom: '15px' }}>İletişim</h3>
          <p>
            Sorularınız ve önerileriniz için bizimle iletişime geçebilirsiniz.
          </p>
          <p style={{ marginTop: '10px' }}>
            <strong>E-posta:</strong> info@stajduragi.edu.tr
          </p>
        </div>
      </div>
    </div>
  )
}

export default StudentAbout

