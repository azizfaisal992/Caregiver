import React from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'

const MyTimesheet = () => {
  const entries = [
    { date: '2026-04-17', day: 'Thursday', client: 'Mrs. Smith', in: '08:00 AM', out: '02:00 PM', hours: 6, status: 'Verified' },
    { date: '2026-04-16', day: 'Wednesday', client: 'Mr. Johnson', in: '10:00 AM', out: '04:00 PM', hours: 6, status: 'Verified' },
    { date: '2026-04-15', day: 'Tuesday', client: 'Mrs. Brown', in: '08:30 AM', out: '02:30 PM', hours: 6, status: 'Verified' },
    { date: '2026-04-14', day: 'Monday', client: 'Mr. Davis', in: '09:00 AM', out: '03:00 PM', hours: 6, status: 'Pending' },
  ]

  const thisWeekHours = 24
  const thisMonthHours = 96

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">My Timesheet</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">This Week</p><p className="text-3xl font-bold text-blue-600 mt-2">{thisWeekHours} hrs</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">This Month</p><p className="text-3xl font-bold text-green-600 mt-2">{thisMonthHours} hrs</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Total Earnings</p><p className="text-3xl font-bold text-purple-600 mt-2">$2,400</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Daily Average</p><p className="text-3xl font-bold text-orange-600 mt-2">6.0 hrs</p></div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Day</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Clock In</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Clock Out</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Hours</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={e.date} className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-800 font-medium">{e.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{e.day}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{e.client}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{e.in}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{e.out}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{e.hours} hrs</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit ${e.status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {e.status === 'Verified' ? <CheckCircle size={14} /> : <AlertCircle size={14} />}
                      {e.status}
                    </span>
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

export default MyTimesheet
