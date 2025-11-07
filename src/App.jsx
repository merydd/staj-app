import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import StudentDashboard from './pages/StudentDashboard'
import StudentProfile from './pages/StudentProfile'
import StudentResume from './pages/StudentResume'
import StudentApplications from './pages/StudentApplications'
import StudentInternships from './pages/StudentInternships'
import StudentAnnouncements from './pages/StudentAnnouncements'
import StudentAbout from './pages/StudentAbout'
import CompanyDashboard from './pages/CompanyDashboard'
import CompanyProfile from './pages/CompanyProfile'
import CompanyInternships from './pages/CompanyInternships'
import CompanyAbout from './pages/CompanyAbout'
import InternshipDetail from './pages/InternshipDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/resume" element={<StudentResume />} />
        <Route path="/student/applications" element={<StudentApplications />} />
        <Route path="/student/internships" element={<StudentInternships />} />
        <Route path="/student/announcements" element={<StudentAnnouncements />} />
        <Route path="/student/about" element={<StudentAbout />} />
        <Route path="/company" element={<CompanyDashboard />} />
        <Route path="/company/profile" element={<CompanyProfile />} />
        <Route path="/company/internships" element={<CompanyInternships />} />
        <Route path="/company/about" element={<CompanyAbout />} />
        <Route path="/internship/:id" element={<InternshipDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App

