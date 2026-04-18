import React from 'react'
import { Calendar, Clock, MapPin, Phone, CheckCircle } from 'lucide-react'

const MyShifts = () => {
  const shifts = [
    { id: 1, date: '2026-04-17', day: 'Today', time: '08:00 AM - 02:00 PM', client: 'Mrs. Sarah Smith', location: '123 Oak Street', phone: '617-555-0101', rate: '$25/hr', status: 'Active' },
    { id: 2, date: '2026-04-18', day: 'Tomorrow', time: '10:00 AM - 04:00 PM', client: 'Mr. Robert Johnson', location: '456 Elm Avenue', phone: '617-555-0102', rate: '$25/hr', status: 'Scheduled' },
    { id: 3, date: '2026-04-19', day: 'Apr 19', time: '08:30 AM - 02:30 PM', client: 'Mrs. Elizabeth Brown', location: '789 Pine Road', phone: '617-555-0103', rate: '$25/hr', status: 'Scheduled' },
  ]

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">My Shifts</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">This Week</p><p className="text-3xl font-bold text-blue-600 mt-2">24 hrs</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">This Month</p><p className="text-3xl font-bold text-green-600 mt-2">96 hrs</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold\">Completed</p><p className="text-3xl font-bold text-purple-600 mt-2">72 hrs</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold\">Earnings</p><p className="text-3xl font-bold text-orange-600 mt-2">$1,800</p></div>
      </div>
      <div className="space-y-4">
        {shifts.map((shift) => (
          <div key={shift.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 border-l-4 border-blue-500">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
              <div><h3 className="text-xl md:text-2xl font-bold text-gray-800">{shift.client}</h3><p className="text-sm text-gray-600 mt-1">{shift.day} • {shift.date}</p></div>
              <span className="px-4 py-2 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">{shift.status}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b">
              <div><p className="text-xs text-gray-500 font-semibold mb-1">TIME</p><div className="flex items-center gap-2"><Clock size={16} /><p className="text-sm font-semibold">{shift.time}</p></div></div>
              <div><p className="text-xs text-gray-500 font-semibold mb-1">LOCATION</p><div className="flex items-center gap-2"><MapPin size={16} /><p className="text-sm font-semibold">{shift.location}</p></div></div>
              <div><p className="text-xs text-gray-500 font-semibold mb-1">RATE</p><p className="text-sm font-semibold text-green-600">{shift.rate}</p></div>
              <div><p className="text-xs text-gray-500 font-semibold mb-1">CONTACT</p><div className="flex items-center gap-2"><Phone size={16} /><p className="text-sm font-semibold">{shift.phone}</p></div></div>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition">View Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default MyShifts
