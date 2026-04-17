import React, { useState } from 'react'
import { DollarSign, Download, Eye, FileText } from 'lucide-react'

const Payroll = () => {
  const [payrollRecords] = useState([
    { id: 1, caregiver: 'John Doe', period: '04/01 - 04/15', hours: 80, rate: '$20/hr', total: '$1,600', status: 'Processed' },
    { id: 2, caregiver: 'Jane Wilson', period: '04/01 - 04/15', hours: 75, rate: '$22/hr', total: '$1,650', status: 'Processed' },
    { id: 3, caregiver: 'Mike Johnson', period: '04/01 - 04/15', hours: 88, rate: '$20/hr', total: '$1,760', status: 'Pending' },
  ])

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Payroll Management</h1>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
          <DollarSign size={20} className="mr-2" />
          Process Payroll
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-semibold">Total Payroll (This Period)</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">$5,010</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-semibold">Total Hours</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">243 hrs</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-semibold">Average Rate</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">$20.62/hr</p>
        </div>
      </div>

      {/* Payroll Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Caregiver</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Period</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Hours</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Rate</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Total</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payrollRecords.map((record) => (
              <tr key={record.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{record.caregiver}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{record.period}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{record.hours}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{record.rate}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">{record.total}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${record.status === 'Processed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {record.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Eye size={16} />
                  </button>
                  <button className="text-green-600 hover:text-green-800">
                    <Download size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Payroll
