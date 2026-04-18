import React from 'react'
import { Activity, HeartPulse, Droplets } from 'lucide-react'

const HealthRecords = () => {
  const weeklyRecords = [
    { day: 'Mon', date: '2026-04-13', bloodPressure: '128/84', bloodSugar: 118, pulse: 78, notes: 'Stable vitals' },
    { day: 'Tue', date: '2026-04-14', bloodPressure: '126/82', bloodSugar: 112, pulse: 76, notes: 'Good response to care plan' },
    { day: 'Wed', date: '2026-04-15', bloodPressure: '130/85', bloodSugar: 120, pulse: 80, notes: 'Mild fatigue reported' },
    { day: 'Thu', date: '2026-04-16', bloodPressure: '124/80', bloodSugar: 109, pulse: 74, notes: 'Improved hydration' },
    { day: 'Fri', date: '2026-04-17', bloodPressure: '127/83', bloodSugar: 114, pulse: 77, notes: 'Routine visit completed' },
    { day: 'Sat', date: '2026-04-18', bloodPressure: '125/81', bloodSugar: 110, pulse: 75, notes: 'No concerns' },
    { day: 'Sun', date: '2026-04-19', bloodPressure: '126/82', bloodSugar: 112, pulse: 76, notes: 'Weekly review complete' },
  ]

  const latest = weeklyRecords[weeklyRecords.length - 1]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Health Records (Last 7 Days)</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <HeartPulse className="text-red-600" size={18} />
            <p className="text-sm text-gray-600 font-semibold">Latest Blood Pressure</p>
          </div>
          <p className="text-2xl font-bold text-gray-800">{latest.bloodPressure}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="text-blue-600" size={18} />
            <p className="text-sm text-gray-600 font-semibold">Latest Blood Sugar</p>
          </div>
          <p className="text-2xl font-bold text-gray-800">{latest.bloodSugar} mg/dL</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="text-green-600" size={18} />
            <p className="text-sm text-gray-600 font-semibold">Latest Pulse</p>
          </div>
          <p className="text-2xl font-bold text-gray-800">{latest.pulse} bpm</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Day</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Blood Pressure</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Blood Sugar</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Pulse</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Nurse Notes</th>
              </tr>
            </thead>
            <tbody>
              {weeklyRecords.map((record) => (
                <tr key={record.date} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{record.day}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{record.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{record.bloodPressure}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{record.bloodSugar} mg/dL</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{record.pulse} bpm</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HealthRecords
