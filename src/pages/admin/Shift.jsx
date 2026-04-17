import React, { useState } from 'react'
import { Plus, Edit, Trash2, Calendar, Clock, User } from 'lucide-react'

const Shift = () => {
  const [shifts] = useState([
    { id: 1, date: '2026-04-17', time: '8:00 AM - 2:00 PM', caregiver: 'John Doe', client: 'Mrs. Smith', status: 'Assigned' },
    { id: 2, date: '2026-04-17', time: '2:00 PM - 8:00 PM', caregiver: 'Jane Wilson', client: 'Mr. Johnson', status: 'Assigned' },
    { id: 3, date: '2026-04-18', time: '8:00 AM - 2:00 PM', caregiver: 'Unassigned', client: 'Mrs. Brown', status: 'Open' },
  ])

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Shift Management</h1>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
          <Plus size={20} className="mr-2" />
          Create Shift
        </button>
      </div>

      {/* Shifts Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Time</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Caregiver</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Client</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((shift) => (
              <tr key={shift.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-800">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-gray-500" />
                    {shift.date}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-gray-500" />
                    {shift.time}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  <div className="flex items-center">
                    <User size={16} className="mr-2 text-gray-500" />
                    {shift.caregiver}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">{shift.client}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${shift.status === 'Assigned' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {shift.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Edit size={16} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 size={16} />
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

export default Shift
