import React from 'react'
import { Send } from 'lucide-react'

const Messages = () => {
  const messages = [
    { id: 1, from: 'Jennifer Lee', role: 'Nurse', message: 'Mrs. Smith completed therapy today without complications', time: '2:30 PM', unread: false },
    { id: 2, from: 'Mark Johnson', role: 'Therapist', message: 'Need approval for extended care plan', time: '1:15 PM', unread: true },
    { id: 3, from: 'Admin Support', role: 'System', message: 'Payroll processing completed successfully', time: '11:00 AM', unread: false },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm font-semibold">Total Messages</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">28</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm font-semibold">Unread</p>
          <p className="text-3xl font-bold text-yellow-600 mt-2">1</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-600 text-sm font-semibold">Last Message</p>
          <p className="text-3xl font-bold text-green-600 mt-2">Now</p>
        </div>
      </div>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`bg-white rounded-lg shadow p-6 ${msg.unread ? 'border-l-4 border-blue-500' : ''}`}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-bold text-gray-800">{msg.from}</p>
                <p className="text-xs text-gray-500">{msg.role}</p>
              </div>
              <p className="text-xs text-gray-500">{msg.time}</p>
            </div>
            <p className="text-gray-700 mb-4">{msg.message}</p>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center gap-1">
              <Send size={16} />
              Reply
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Messages