import React from 'react'
import { Download, Eye } from 'lucide-react'

const MyPayslip = () => {
  const payslips = [
    { id: 1, period: '04/01 - 04/15/2026', date: '2026-04-16', hours: 80, rate: '$25.00/hr', gross: '$2,000.00', deductions: '$320.00', net: '$1,680.00', status: 'Paid' },
    { id: 2, period: '03/17 - 03/31/2026', date: '2026-04-01', hours: 88, rate: '$25.00/hr', gross: '$2,200.00', deductions: '$352.00', net: '$1,848.00', status: 'Paid' },
    { id: 3, period: '03/03 - 03/16/2026', date: '2026-03-17', hours: 72, rate: '$25.00/hr', gross: '$1,800.00', deductions: '$288.00', net: '$1,512.00', status: 'Paid' },
  ]

  const totalEarnings = payslips.reduce((sum, p) => sum + parseFloat(p.net.replace('$', '')), 0)

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">My Payslips</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Total Earned</p><p className="text-3xl font-bold text-green-600 mt-2">${totalEarnings.toFixed(2)}</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Total Hours</p><p className="text-3xl font-bold text-blue-600 mt-2">240 hrs</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Hourly Rate</p><p className="text-3xl font-bold text-purple-600 mt-2">$25.00</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Payslips</p><p className="text-3xl font-bold text-orange-600 mt-2">{payslips.length}</p></div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Period</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Hours</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Rate</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Gross</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Deductions</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Net Pay</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payslips.map((slip) => (
                <tr key={slip.id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-800 font-medium">{slip.period}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{slip.hours}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{slip.rate}</td>
                  <td className="px-6 py-4 text-sm text-gray-800 font-semibold">{slip.gross}</td>
                  <td className="px-6 py-4 text-sm text-red-600">{slip.deductions}</td>
                  <td className="px-6 py-4 text-sm text-green-600 font-bold">{slip.net}</td>
                  <td className="px-6 py-4 text-sm flex gap-3">
                    <button className="text-blue-600 hover:text-blue-800"><Eye size={18} /></button>
                    <button className="text-green-600 hover:text-green-800"><Download size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyPayslip
