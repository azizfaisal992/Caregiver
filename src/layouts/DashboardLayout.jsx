import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext.js'
import { Menu, X, LogOut, Home, Calendar, Users, DollarSign, FileText, Clock, CheckSquare, CreditCard, Pill } from 'lucide-react'

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const getNavItems = () => {
    if (!user) return []

    const roleNavigation = {
      admin: [
        { label: 'Dashboard', icon: Home, path: '/admin/dashboard' },
        { label: 'Shift Management', icon: Calendar, path: '/admin/shift' },
        { label: 'Clients', icon: Users, path: '/admin/clients' },
        { label: 'Payroll', icon: DollarSign, path: '/admin/payroll' },
        { label: 'Billing', icon: FileText, path: '/admin/billing' },
      ],
      caregiver: [
        { label: 'Dashboard', icon: Home, path: '/caregiver/dashboard' },
        { label: 'EVV Clock', icon: Clock, path: '/caregiver/evv' },
        { label: 'My Shifts', icon: Calendar, path: '/caregiver/shifts' },
        { label: 'My Tasks', icon: CheckSquare, path: '/caregiver/tasks' },
        { label: 'Timesheet', icon: FileText, path: '/caregiver/timesheet' },
        { label: 'My Payslip', icon: CreditCard, path: '/caregiver/payslip' },
      ],
      client: [
        { label: 'Dashboard', icon: Home, path: '/client/dashboard' },
        { label: 'Care Plan', icon: FileText, path: '/client/careplan' },
        { label: 'Medications', icon: Pill, path: '/client/medication' },
      ],
    }

    return roleNavigation[user.role] || []
  }

  const navItems = getNavItems()

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gray-900 text-white transition-all duration-300 fixed h-screen overflow-y-auto`}
      >
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-blue-400">CareManager</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-800 rounded"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* User Info */}
        {sidebarOpen && (
          <div className="px-4 py-4 border-b border-gray-700">
            <p className="text-sm font-semibold text-blue-300">{user?.email}</p>
            <p className="text-xs text-gray-400 capitalize mt-1">{user?.role}</p>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="mt-8">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.path}
                href={item.path}
                className="flex items-center px-4 py-3 hover:bg-gray-800 text-gray-300 hover:text-white transition"
              >
                <Icon size={20} />
                {sidebarOpen && <span className="ml-3">{item.label}</span>}
              </a>
            )
          })}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white text-sm font-semibold transition"
          >
            <LogOut size={18} />
            {sidebarOpen && <span className="ml-2">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${sidebarOpen ? 'ml-64' : 'ml-20'} flex-1 overflow-auto transition-all duration-300`}>
        {/* Top Bar */}
        <div className="bg-white shadow-md p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {user?.role.charAt(0).toUpperCase() + user?.role.slice(1)} Portal
          </h2>
          <div className="text-right">
            <p className="text-sm text-gray-600">Welcome back!</p>
            <p className="text-xs text-gray-500">{new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
