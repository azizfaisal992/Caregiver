import React, { useMemo, useState } from 'react'
import { MessageSquare, Phone, Send } from 'lucide-react'

const CareTeamContact = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Jennifer Lee, RN', text: 'Good morning. How are you feeling today?', time: '08:15 AM', fromClient: false },
    { id: 2, sender: 'You', text: 'I am feeling better, blood pressure is stable.', time: '08:30 AM', fromClient: true },
    { id: 3, sender: 'Dr. Kevin Miles', text: 'Please continue hydration and follow medication schedule.', time: '09:05 AM', fromClient: false },
  ])
  const [draft, setDraft] = useState('')

  const careTeam = useMemo(
    () => [
      { id: 1, name: 'Jennifer Lee, RN', role: 'Primary Nurse', phone: '(352) 317-6539', available: 'Mon-Fri 8:00 AM - 6:00 PM' },
      { id: 2, name: 'Dr. Kevin Miles', role: 'Physician', phone: '(352) 231-3661', available: 'Mon-Fri 9:00 AM - 5:00 PM' },
      { id: 3, name: 'Lisa Anderson', role: 'Care Coordinator', phone: '(386) 361-0058', available: 'Mon-Sat 7:00 AM - 7:00 PM' },
    ],
    []
  )

  const handleSendMessage = () => {
    const text = draft.trim()
    if (!text) return

    const newMessage = {
      id: Date.now(),
      sender: 'You',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      fromClient: true,
    }

    setMessages((prev) => [...prev, newMessage])
    setDraft('')
  }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Contact Care Team</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[340px_1fr] gap-6">
        <div className="bg-white rounded-lg shadow p-5">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Care Team Directory</h2>
          <div className="space-y-3">
            {careTeam.map((member) => (
              <div key={member.id} className="border border-gray-200 rounded-lg p-3">
                <p className="font-semibold text-gray-800">{member.name}</p>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="text-xs text-gray-500 mt-1">{member.available}</p>
                <a
                  href={`tel:${member.phone.replace(/[^\d+]/g, '')}`}
                  className="mt-3 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-3 py-2 rounded"
                >
                  <Phone size={14} />
                  Call {member.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col">
          <div className="px-5 py-4 border-b border-gray-200 flex items-center gap-2">
            <MessageSquare className="text-blue-600" size={18} />
            <h2 className="text-xl font-bold text-gray-800">Care Team Messages</h2>
          </div>

          <div className="p-4 md:p-5 space-y-3 h-[320px] md:h-[420px] overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`max-w-lg ${message.fromClient ? 'ml-auto' : ''}`}>
                <div className={`rounded-xl px-4 py-3 ${message.fromClient ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-800'}`}>
                  <p className="text-sm">{message.text}</p>
                </div>
                <p className={`text-xs mt-1 ${message.fromClient ? 'text-right text-blue-700' : 'text-gray-500'}`}>
                  {message.sender} • {message.time}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 bg-white flex items-center gap-2">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
              placeholder="Type message to your care team"
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSendMessage}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold"
            >
              <Send size={14} />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareTeamContact
