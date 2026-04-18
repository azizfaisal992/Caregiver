import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { AuthContext } from './context/authContext.js'

// Auth Pages
import Login from './pages/auth/Login'

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard'
import Shift from './pages/admin/Shift'
import Clients from './pages/admin/Clients'
import Payroll from './pages/admin/Payroll'
import Billing from './pages/admin/Billing'
import Messages from './pages/admin/Messages'
import Forms from './pages/admin/Forms'
import Incidents from './pages/admin/Incidents'

// Caregiver Pages
import CaregiverDashboard from './pages/caregiver/CaregiverDashboard'
import EVVClock from './pages/caregiver/EVVClock'
import MyShifts from './pages/caregiver/MyShifts'
import MyTask from './pages/caregiver/MyTask'
import MyPayslip from './pages/caregiver/MyPayslip'
import MyTimesheet from './pages/caregiver/MyTimesheet'

// Client Pages
import ClientDashboard from './pages/client/ClientDashboard'
import MyCarePlan from './pages/client/MyCarePlan'
import MyMedication from './pages/client/MyMedication'
import CareTeamContact from './pages/client/CareTeamContact'
import HealthRecords from './pages/client/HealthRecords'

// Layouts
import DashboardLayout from './layouts/DashboardLayout'

// Protected Route Component
const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />
  }

  return children
}

// Unauthorized Page
const Unauthorized = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Access Denied</h1>
      <p className="text-gray-600 mb-8">You don't have permission to access this page.</p>
      <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
        Back to Login
      </a>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute requiredRole="admin">
                <DashboardLayout>
                  <AdminDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/shift"
            element={
              <ProtectedRoute requiredRole="admin">
                <DashboardLayout>
                  <Shift />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/clients"
            element={
              <ProtectedRoute requiredRole="admin">
                <DashboardLayout>
                  <Clients />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/payroll"
            element={
              <ProtectedRoute requiredRole="admin">
                <DashboardLayout>
                  <Payroll />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/billing"
            element={
              <ProtectedRoute requiredRole="admin">
                <DashboardLayout>
                  <Billing />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/messages"
            element={
              <ProtectedRoute requiredRole="admin">
                <DashboardLayout>
                  <Messages />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/contacts"
            element={
              <ProtectedRoute requiredRole="admin">
                <DashboardLayout>
                  <Forms />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/incidents"
            element={
              <ProtectedRoute requiredRole="admin">
                <DashboardLayout>
                  <Incidents />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Caregiver Routes */}
          <Route
            path="/caregiver/dashboard"
            element={
              <ProtectedRoute requiredRole="caregiver">
                <DashboardLayout>
                  <CaregiverDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/caregiver/evv"
            element={
              <ProtectedRoute requiredRole="caregiver">
                <DashboardLayout>
                  <EVVClock />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/caregiver/shifts"
            element={
              <ProtectedRoute requiredRole="caregiver">
                <DashboardLayout>
                  <MyShifts />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/caregiver/tasks"
            element={
              <ProtectedRoute requiredRole="caregiver">
                <DashboardLayout>
                  <MyTask />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/caregiver/payslip"
            element={
              <ProtectedRoute requiredRole="caregiver">
                <DashboardLayout>
                  <MyPayslip />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/caregiver/timesheet"
            element={
              <ProtectedRoute requiredRole="caregiver">
                <DashboardLayout>
                  <MyTimesheet />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Client Routes */}
          <Route
            path="/client/dashboard"
            element={
              <ProtectedRoute requiredRole="client">
                <DashboardLayout>
                  <ClientDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/client/careplan"
            element={
              <ProtectedRoute requiredRole="client">
                <DashboardLayout>
                  <MyCarePlan />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/client/medication"
            element={
              <ProtectedRoute requiredRole="client">
                <DashboardLayout>
                  <MyMedication />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/client/care-team"
            element={
              <ProtectedRoute requiredRole="client">
                <DashboardLayout>
                  <CareTeamContact />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/client/health-records"
            element={
              <ProtectedRoute requiredRole="client">
                <DashboardLayout>
                  <HealthRecords />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
