import React, { useState } from 'react'
import { Users, Calendar, DollarSign, AlertCircle } from 'lucide-react'

const CombinedTrendChart = ({ data }) => {
  const width = 860
  const height = 260
  const padding = 16
  const metrics = [
    { key: 'caregivers', label: 'Total Caregivers', color: '#2563EB' },
    { key: 'clients', label: 'Active Clients', color: '#16A34A' },
    { key: 'shifts', label: 'Shifts Per Week', color: '#9333EA' },
    { key: 'amount', label: 'Payroll Amount', color: '#EA580C', prefix: '$' },
  ]

  const getLinePoints = (metricKey) => {
    const values = data.map((point) => point[metricKey])
    const max = Math.max(...values)
    const min = Math.min(...values)
    const range = Math.max(max - min, 1)

    return data
      .map((point, index) => {
        const x = padding + (index * (width - padding * 2)) / (data.length - 1)
        const normalized = (point[metricKey] - min) / range
        const y = height - padding - normalized * (height - padding * 2)
        return `${x},${y}`
      })
      .join(' ')
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-64">
        {[0, 1, 2, 3, 4].map((line) => {
          const y = padding + (line * (height - padding * 2)) / 4
          return (
            <line
              key={line}
              x1={padding}
              y1={y}
              x2={width - padding}
              y2={y}
              stroke="#E5E7EB"
              strokeWidth="1"
            />
          )
        })}

        {metrics.map((metric) => (
          <polyline
            key={metric.key}
            fill="none"
            strokeWidth="3"
            points={getLinePoints(metric.key)}
            stroke={metric.color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {data.map((point, index) => {
          const x = padding + (index * (width - padding * 2)) / (data.length - 1)
          return (
            <text key={point.label} x={x} y={height - 2} textAnchor="middle" fontSize="11" fill="#6B7280">
              {point.label}
            </text>
          )
        })}
      </svg>

      <div className="flex flex-wrap gap-3 mt-3">
        {metrics.map((metric) => {
          const latest = data[data.length - 1]?.[metric.key] || 0
          return (
            <div key={metric.key} className="inline-flex items-center gap-2 text-sm border border-gray-200 rounded-full px-3 py-1.5 bg-gray-50">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: metric.color }} />
              <span className="text-gray-700 font-semibold">{metric.label}:</span>
              <span className="text-gray-900 font-bold">
                {metric.prefix || ''}
                {latest.toLocaleString()}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const initialShiftForm = {
  clientName: '',
  caregiverName: '',
  date: '',
  startTime: '',
  endTime: '',
  serviceType: '',
  notes: '',
}

const initialCaregiverForm = {
  fullName: '',
  email: '',
  phone: '',
  certification: '',
  availability: '',
  emergencyContact: '',
}

const initialPayrollForm = {
  payPeriodStart: '',
  payPeriodEnd: '',
  paymentDate: '',
  includeOvertime: true,
}

const reports = [
  { id: 1, title: 'Weekly Shift Coverage', description: 'Coverage by day and open shifts', status: 'Ready' },
  { id: 2, title: 'Caregiver Hours Summary', description: 'Approved hours by caregiver', status: 'Ready' },
  { id: 3, title: 'Payroll Cost Breakdown', description: 'Regular vs overtime payroll cost', status: 'Ready' },
  { id: 4, title: 'Client Service Utilization', description: 'Services delivered by client', status: 'Ready' },
]

const AdminDashboard = () => {
  const [activeAction, setActiveAction] = useState(null)
  const [shiftForm, setShiftForm] = useState(initialShiftForm)
  const [caregiverForm, setCaregiverForm] = useState(initialCaregiverForm)
  const [payrollForm, setPayrollForm] = useState(initialPayrollForm)
  const [actionMessage, setActionMessage] = useState('')

  const stats = [
    { title: 'Total Caregivers', value: '42', icon: Users, color: 'bg-blue-500' },
    { title: 'Active Clients', value: '28', icon: Users, color: 'bg-green-500' },
    { title: 'Shifts This Week', value: '156', icon: Calendar, color: 'bg-purple-500' },
    { title: 'Payroll Amount', value: '$12,450', icon: DollarSign, color: 'bg-orange-500' },
  ]

  const weeklyTrendData = [
    { label: 'W1', caregivers: 36, clients: 23, shifts: 132, amount: 10800 },
    { label: 'W2', caregivers: 37, clients: 24, shifts: 138, amount: 11240 },
    { label: 'W3', caregivers: 39, clients: 25, shifts: 144, amount: 11720 },
    { label: 'W4', caregivers: 40, clients: 26, shifts: 147, amount: 11980 },
    { label: 'W5', caregivers: 41, clients: 27, shifts: 152, amount: 12230 },
    { label: 'W6', caregivers: 42, clients: 28, shifts: 156, amount: 12450 },
  ]

  const closeActionPanel = () => {
    setActiveAction(null)
  }

  const handleCreateShift = (event) => {
    event.preventDefault()
    setActionMessage(`Shift created for ${shiftForm.clientName} on ${shiftForm.date}.`)
    setShiftForm(initialShiftForm)
    closeActionPanel()
  }

  const handleAddCaregiver = (event) => {
    event.preventDefault()
    setActionMessage(`New caregiver ${caregiverForm.fullName} added successfully.`)
    setCaregiverForm(initialCaregiverForm)
    closeActionPanel()
  }

  const handleGeneratePayroll = (event) => {
    event.preventDefault()
    setActionMessage(`Payroll generated for ${payrollForm.payPeriodStart} to ${payrollForm.payPeriodEnd}.`)
    setPayrollForm(initialPayrollForm)
    closeActionPanel()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

      {actionMessage && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm font-semibold">
          {actionMessage}
        </div>
      )}

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

      {/* Weekly Trends */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Weekly Performance Trends</h3>
          <p className="text-sm text-gray-500 mt-1">Single combined graph for caregiver count, active clients, weekly shifts, and payroll amount.</p>
        </div>
        <CombinedTrendChart data={weeklyTrendData} />
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
            <button
              onClick={() => setActiveAction('shift')}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded transition"
            >
              📋 Create New Shift
            </button>
            <button
              onClick={() => setActiveAction('caregiver')}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded transition"
            >
              👤 Add New Caregiver
            </button>
            <button
              onClick={() => setActiveAction('payroll')}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded transition"
            >
              💰 Generate Payroll
            </button>
            <button
              onClick={() => setActiveAction('reports')}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded transition"
            >
              📊 View Reports
            </button>
          </div>
        </div>
      </div>

      {activeAction && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">
                {activeAction === 'shift' && 'Create New Shift'}
                {activeAction === 'caregiver' && 'Add New Caregiver'}
                {activeAction === 'payroll' && 'Generate Payroll'}
                {activeAction === 'reports' && 'Reports'}
              </h3>
              <button
                onClick={closeActionPanel}
                className="text-gray-500 hover:text-gray-700 text-sm font-semibold"
              >
                Close
              </button>
            </div>

            <div className="p-6">
              {activeAction === 'shift' && (
                <form onSubmit={handleCreateShift} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      required
                      value={shiftForm.clientName}
                      onChange={(e) => setShiftForm((prev) => ({ ...prev, clientName: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      placeholder="Client Name"
                    />
                    <input
                      required
                      value={shiftForm.caregiverName}
                      onChange={(e) => setShiftForm((prev) => ({ ...prev, caregiverName: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      placeholder="Caregiver Name"
                    />
                    <input
                      required
                      type="date"
                      value={shiftForm.date}
                      onChange={(e) => setShiftForm((prev) => ({ ...prev, date: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                    />
                    <input
                      required
                      value={shiftForm.serviceType}
                      onChange={(e) => setShiftForm((prev) => ({ ...prev, serviceType: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      placeholder="Service Type"
                    />
                    <input
                      required
                      type="time"
                      value={shiftForm.startTime}
                      onChange={(e) => setShiftForm((prev) => ({ ...prev, startTime: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                    />
                    <input
                      required
                      type="time"
                      value={shiftForm.endTime}
                      onChange={(e) => setShiftForm((prev) => ({ ...prev, endTime: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                    />
                  </div>
                  <textarea
                    value={shiftForm.notes}
                    onChange={(e) => setShiftForm((prev) => ({ ...prev, notes: e.target.value }))}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    rows={3}
                    placeholder="Shift Notes"
                  />
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
                    Save Shift
                  </button>
                </form>
              )}

              {activeAction === 'caregiver' && (
                <form onSubmit={handleAddCaregiver} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      required
                      value={caregiverForm.fullName}
                      onChange={(e) => setCaregiverForm((prev) => ({ ...prev, fullName: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      placeholder="Full Name"
                    />
                    <input
                      required
                      type="email"
                      value={caregiverForm.email}
                      onChange={(e) => setCaregiverForm((prev) => ({ ...prev, email: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      placeholder="Email"
                    />
                    <input
                      required
                      value={caregiverForm.phone}
                      onChange={(e) => setCaregiverForm((prev) => ({ ...prev, phone: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      placeholder="Phone"
                    />
                    <input
                      required
                      value={caregiverForm.certification}
                      onChange={(e) => setCaregiverForm((prev) => ({ ...prev, certification: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      placeholder="Certification"
                    />
                    <input
                      required
                      value={caregiverForm.availability}
                      onChange={(e) => setCaregiverForm((prev) => ({ ...prev, availability: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      placeholder="Availability"
                    />
                    <input
                      value={caregiverForm.emergencyContact}
                      onChange={(e) => setCaregiverForm((prev) => ({ ...prev, emergencyContact: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                      placeholder="Emergency Contact"
                    />
                  </div>
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
                    Add Caregiver
                  </button>
                </form>
              )}

              {activeAction === 'payroll' && (
                <form onSubmit={handleGeneratePayroll} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      required
                      type="date"
                      value={payrollForm.payPeriodStart}
                      onChange={(e) => setPayrollForm((prev) => ({ ...prev, payPeriodStart: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                    />
                    <input
                      required
                      type="date"
                      value={payrollForm.payPeriodEnd}
                      onChange={(e) => setPayrollForm((prev) => ({ ...prev, payPeriodEnd: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                    />
                    <input
                      required
                      type="date"
                      value={payrollForm.paymentDate}
                      onChange={(e) => setPayrollForm((prev) => ({ ...prev, paymentDate: e.target.value }))}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                    />
                  </div>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={payrollForm.includeOvertime}
                      onChange={(e) => setPayrollForm((prev) => ({ ...prev, includeOvertime: e.target.checked }))}
                    />
                    Include Overtime in Payroll Calculation
                  </label>
                  <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold">
                    Generate Payroll
                  </button>
                </form>
              )}

              {activeAction === 'reports' && (
                <div className="space-y-3">
                  {reports.map((report) => (
                    <div key={report.id} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">{report.title}</p>
                        <p className="text-sm text-gray-600">{report.description}</p>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded-lg font-semibold">
                        Open
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
