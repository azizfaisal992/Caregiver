import React from 'react'
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react'

const Reports = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Reports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm font-semibold">Available Reports</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">8</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm font-semibold">Generated This Month</p>
          <p className="text-3xl font-bold text-green-600 mt-2">12</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm font-semibold">Pending</p>
          <p className="text-3xl font-bold text-yellow-600 mt-2">2</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm font-semibold">Scheduled</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">5</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="text-blue-600" size={28} />
            <h3 className="text-xl font-bold text-gray-800">Financial Reports</h3>
          </div>
          <div className="space-y-2">
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">Monthly Revenue Report</button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">Expense Summary</button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">Client Billing Summary</button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-green-600" size={28} />
            <h3 className="text-xl font-bold text-gray-800">Staff Reports</h3>
          </div>
          <div className="space-y-2">
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">Attendance Report</button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">Payroll Summary</button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">Performance Review</button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="text-purple-600" size={28} />
            <h3 className="text-xl font-bold text-gray-800">Clinical Reports</h3>
          </div>
          <div className="space-y-2">
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">Care Quality Report</button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">Incident Summary</button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">Client Outcomes</button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="text-orange-600" size={28} />
            <h3 className="text-xl font-bold text-gray-800">Compliance</h3>
          </div>
          <div className="space-y-2">
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">Audit Trail</button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">HIPAA Compliance</button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">Regulatory Reports</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports