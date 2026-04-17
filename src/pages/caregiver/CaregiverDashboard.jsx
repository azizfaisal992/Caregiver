import React from 'react'
import { Clock, MapPin, User, CheckCircle, AlertCircle } from 'lucide-react'

const CaregiverDashboard = () => {
  const todaysShift = {
    client: 'Mrs. Sarah Smith',
    startTime: '08:00 AM',
    endTime: '02:00 PM',
    location: '123 Oak St, Boston MA',
    status: 'In Progress',
    clockedIn: true,
  }

  const upcomingShifts = [
    { date: 'Tomorrow', time: '10:00 AM - 4:00 PM', client: 'Mr. Robert Johnson' },
    { date: 'Apr 19', time: '2:00 PM - 8:00 PM', client: 'Mrs. Elizabeth Brown' },
    { date: 'Apr 20', time: '8:00 AM - 2:00 PM', client: 'Mrs. Sarah Smith' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Caregiver Dashboard</h1>

      {/* Today's Shift */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Today's Shift</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-blue-100 text-sm mb-2">CLIENT</p>
            <p className="text-xl font-semibold flex items-center">
              <User size={20} className="mr-2" />
              {todaysShift.client}
            </p>
          </div>
          <div>
            <p className="text-blue-100 text-sm mb-2">TIME</p>
            <p className="text-xl font-semibold flex items-center">
              <Clock size={20} className="mr-2" />
              {todaysShift.startTime} - {todaysShift.endTime}
            </p>
          </div>
          <div>
            <p className="text-blue-100 text-sm mb-2">LOCATION</p>
            <p className="text-xl font-semibold flex items-center">
              <MapPin size={20} className="mr-2" />
              {todaysShift.location}
            </p>
          </div>
          <div>
            <p className="text-blue-100 text-sm mb-2">STATUS</p>
            <div className="flex items-center">
              {todaysShift.clockedIn ? (
                <CheckCircle size={20} className="mr-2 text-green-300" />
              ) : (
                <AlertCircle size={20} className="mr-2 text-yellow-300" />
              )}
              <span className="text-xl font-semibold">{todaysShift.status}</span>
            </div>
          </div>
        </div>

        {/* Time Buttons */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-50 transition">
            Clock In
          </button>
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-50 transition">
            Break Start
          </button>
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-50 transition">
            Break End
          </button>
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-blue-50 transition">
            Clock Out
          </button>
        </div>
      </div>

      {/* Upcoming Shifts & Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Shifts */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Shifts</h3>
          <div className="space-y-3">
            {upcomingShifts.map((shift, idx) => (
              <div key={idx} className="p-4 border border-gray-200 rounded hover:bg-gray-50 transition">
                <p className="text-sm text-gray-500 font-semibold">{shift.date}</p>
                <p className="text-lg font-semibold text-gray-800">{shift.time}</p>
                <p className="text-sm text-gray-600">📍 {shift.client}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 font-semibold">Hours This Week</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">28 hrs</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 font-semibold">Earnings This Month</p>
            <p className="text-3xl font-bold text-green-600 mt-2">$2,240</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-600 font-semibold">Tasks Pending</p>
            <p className="text-3xl font-bold text-purple-600 mt-2">3</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaregiverDashboard
