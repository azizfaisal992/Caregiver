import React, { useState } from 'react'
import { Plus, Edit, Trash2, Calendar, Clock, User } from 'lucide-react'

const Shift = () => {
  const [shifts, setShifts] = useState([
    { id: 1, date: '2026-04-17', time: '8:00 AM - 2:00 PM', caregiver: 'John Doe', client: 'Mrs. Smith', status: 'Assigned' },
    { id: 2, date: '2026-04-17', time: '2:00 PM - 8:00 PM', caregiver: 'Jane Wilson', client: 'Mr. Johnson', status: 'Assigned' },
    { id: 3, date: '2026-04-18', time: '8:00 AM - 2:00 PM', caregiver: 'Unassigned', client: 'Mrs. Brown', status: 'Open' },
    { id: 4, date: '2026-04-18', time: '8:00 AM - 2:00 PM', caregiver: 'Unassigned', client: 'Mrs. Brown', status: 'Unassigned' },
    { id: 5, date: '2026-04-18', time: '8:00 AM - 2:00 PM', caregiver: 'Unassigned', client: 'Mrs. Brown', status: 'Assigned' },
    { id: 6, date: '2026-04-18', time: '8:00 AM - 2:00 PM', caregiver: 'Unassigned', client: 'Mrs. Brown', status: 'Open' },
    { id: 7, date: '2026-04-18', time: '8:00 AM - 2:00 PM', caregiver: 'KIM LOE', client: 'Mrs. Brown', status: 'Assigned' },
  ])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [formData, setFormData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    caregiver: '',
    client: '',
    status: 'Open',
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCreateShift = (event) => {
    event.preventDefault()

    const newShift = {
      id: Date.now(),
      date: formData.date,
      time: `${formData.startTime} - ${formData.endTime}`,
      caregiver: formData.caregiver || 'Unassigned',
      client: formData.client,
      status: formData.status,
    }

    setShifts((prev) => [newShift, ...prev])
    setFormData({
      date: '',
      startTime: '',
      endTime: '',
      caregiver: '',
      client: '',
      status: 'Open',
    })
    setShowCreateForm(false)
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Shift Management</h1>
        <button
          onClick={() => setShowCreateForm((prev) => !prev)}
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          <Plus size={20} className="mr-2" />
          {showCreateForm ? 'Close Form' : 'Create Shift'}
        </button>
      </div>

      {showCreateForm && (
        <form onSubmit={handleCreateShift} className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Create New Shift</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Start Time</label>
              <input
                type="time"
                required
                value={formData.startTime}
                onChange={(e) => handleInputChange('startTime', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">End Time</label>
              <input
                type="time"
                required
                value={formData.endTime}
                onChange={(e) => handleInputChange('endTime', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Client</label>
              <input
                type="text"
                required
                placeholder="Client Name"
                value={formData.client}
                onChange={(e) => handleInputChange('client', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Caregiver</label>
              <input
                type="text"
                placeholder="Caregiver Name"
                value={formData.caregiver}
                onChange={(e) => handleInputChange('caregiver', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="Open">Open</option>
                <option value="Assigned">Assigned</option>
                <option value="Unassigned">Unassigned</option>
              </select>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
              Save Shift
            </button>
            <button
              type="button"
              onClick={() => setShowCreateForm(false)}
              className="text-gray-600 hover:text-gray-800 px-2 py-2 font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Shifts Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px]">
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
    </div>
  )
}

export default Shift
