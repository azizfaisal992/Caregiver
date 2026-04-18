import React from 'react'
import { CheckCircle, AlertCircle, Clock } from 'lucide-react'

const MyMedication = () => {
  const medications = [
    { id: 1, name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', time: '08:00 AM', status: 'Taken', taken: true },
    { id: 2, name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', time: '08:00 AM, 06:00 PM', status: 'Pending', taken: false },
    { id: 3, name: 'Aspirin', dosage: '75mg', frequency: 'Once daily', time: '08:00 AM', status: 'Taken', taken: true },
    { id: 4, name: 'Vitamin D', dosage: '1000IU', frequency: 'Once daily', time: '12:00 PM', status: 'Pending', taken: false },
  ]

  const takenCount = medications.filter(m => m.taken).length
  const totalCount = medications.length
  const adherenceRate = Math.round((takenCount / totalCount) * 100)

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">My Medications</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Total Medications</p><p className="text-3xl font-bold text-blue-600 mt-2">{totalCount}</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Taken Today</p><p className="text-3xl font-bold text-green-600 mt-2">{takenCount}</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Pending</p><p className="text-3xl font-bold text-yellow-600 mt-2">{totalCount - takenCount}</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Adherence Rate</p><p className="text-3xl font-bold text-purple-600 mt-2">{adherenceRate}%</p></div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Medication</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Dosage</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Frequency</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Time</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {medications.map((med) => (
                <tr key={med.id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">{med.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{med.dosage}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{med.frequency}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{med.time}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit ${med.taken ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {med.taken ? <CheckCircle size={14} /> : <AlertCircle size={14} />}
                      {med.status}
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

export default MyMedication
