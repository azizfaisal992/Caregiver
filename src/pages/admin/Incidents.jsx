import React from 'react'
import { AlertTriangle } from 'lucide-react'

const Incidents = () => {
  const incidents = [
    { id: 1, title: 'Fall Incident - Mrs. Smith', date: '2026-04-16', severity: 'High', status: 'Resolved', reporter: 'Jennifer Lee' },
    { id: 2, title: 'Medication Delay - Mr. Johnson', date: '2026-04-15', severity: 'Medium', status: 'In Investigation', reporter: 'Supervisor' },
    { id: 3, title: 'Equipment Malfunction', date: '2026-04-14', severity: 'Low', status: 'Resolved', reporter: 'Maintenance' },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Incidents</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm font-semibold">Total Incidents</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">{incidents.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm font-semibold">High Severity</p>
          <p className="text-3xl font-bold text-red-600 mt-2">1</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm font-semibold">In Investigation</p>
          <p className="text-3xl font-bold text-yellow-600 mt-2">1</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm font-semibold">Resolved</p>
          <p className="text-3xl font-bold text-green-600 mt-2">2</p>
        </div>
      </div>

      <div className="space-y-4">
        {incidents.map((incident) => (
          <div key={incident.id} className="bg-white rounded-lg shadow p-6 border-l-4 border-red-500">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="text-red-600" size={20} />
                  <h3 className="text-lg font-bold text-gray-800">{incident.title}</h3>
                </div>
                <p className="text-sm text-gray-600">Reported by: {incident.reporter}</p>
                <p className="text-xs text-gray-500 mt-1">Date: {incident.date}</p>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded text-xs font-semibold block mb-2 ${incident.severity === 'High' ? 'bg-red-100 text-red-800' : incident.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                  {incident.severity}
                </span>
                <span className={`px-3 py-1 rounded text-xs font-semibold ${incident.status === 'Resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {incident.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Incidents