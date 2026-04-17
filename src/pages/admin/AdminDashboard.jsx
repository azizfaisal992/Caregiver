import React from 'react'
import { Users, Calendar, DollarSign, AlertCircle } from 'lucide-react'

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Caregivers', value: '42', icon: Users, color: 'bg-blue-500' },
    { title: 'Active Clients', value: '28', icon: Users, color: 'bg-green-500' },
    { title: 'Shifts This Week', value: '156', icon: Calendar, color: 'bg-purple-500' },
    { title: 'Payroll Amount', value: '$12,450', icon: DollarSign, color: 'bg-orange-500' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.title} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-semibold">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alerts */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <AlertCircle className="mr-2 text-yellow-500" size={20} />
            System Alerts
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm font-semibold text-yellow-800">Shift Not Covered</p>
              <p className="text-xs text-yellow-700">Monday 2PM-6PM shift needs a caregiver</p>
            </div>
            <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
              <p className="text-sm font-semibold text-red-800">Payroll Deadline</p>
              <p className="text-xs text-red-700">Payroll processing due in 2 days</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded transition">
              📋 Create New Shift
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded transition">
              👤 Add New Caregiver
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded transition">
              💰 Generate Payroll
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded transition">
              📊 View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
