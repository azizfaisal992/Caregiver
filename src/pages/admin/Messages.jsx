import React, { useMemo, useState } from 'react'
import { Bell, Search, Send, Star } from 'lucide-react'

const Messages = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      participant: 'Jennifer Lee',
      role: 'Caregiver',
      avatar: 'JL',
      preview: 'Mrs. Smith completed therapy today without complications.',
      time: '25 min ago',
      unread: true,
      starred: false,
      messages: [
        {
          id: 11,
          sender: 'Jennifer Lee',
          text: 'Mrs. Smith completed therapy today without complications.',
          sentAt: '09:35 AM',
          fromMe: false,
        },
      ],
    },
    {
      id: 2,
      participant: 'Mark Johnson',
      role: 'Therapist',
      avatar: 'MJ',
      preview: 'Need approval for extended care plan for client #C-024.',
      time: '1 hr ago',
      unread: true,
      starred: true,
      messages: [
        {
          id: 21,
          sender: 'Mark Johnson',
          text: 'Need approval for extended care plan for client #C-024.',
          sentAt: '08:12 AM',
          fromMe: false,
        },
      ],
    },
    {
      id: 3,
      participant: 'Admin Support',
      role: 'System',
      avatar: 'AS',
      preview: 'Payroll processing completed successfully for this cycle.',
      time: '1 day ago',
      unread: false,
      starred: false,
      messages: [
        {
          id: 31,
          sender: 'Admin Support',
          text: 'Payroll processing completed successfully for this cycle.',
          sentAt: 'Yesterday',
          fromMe: false,
        },
      ],
    },
    {
      id: 4,
      participant: 'Nurse Station - Wing B',
      role: 'Clinical Team',
      avatar: 'NB',
      preview: 'Medication update for client #C-017 uploaded to the chart.',
      time: '2 days ago',
      unread: false,
      starred: false,
      messages: [
        {
          id: 41,
          sender: 'Nurse Station - Wing B',
          text: 'Medication update for client #C-017 uploaded to the chart.',
          sentAt: '2 days ago',
          fromMe: false,
        },
      ],
    },
    {
      id: 5,
      participant: 'Client Family - Rivera',
      role: 'Family Contact',
      avatar: 'RF',
      preview: 'Can we reschedule tomorrow evening visit to 6:30 PM?',
      time: '3 days ago',
      unread: true,
      starred: false,
      messages: [
        {
          id: 51,
          sender: 'Client Family - Rivera',
          text: 'Can we reschedule tomorrow evening visit to 6:30 PM?',
          sentAt: '3 days ago',
          fromMe: false,
        },
      ],
    },
  ])

  const [selectedId, setSelectedId] = useState(null)
  const [filterTab, setFilterTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [replyText, setReplyText] = useState('')
  const totalConversations = conversations.length
  const unreadCount = conversations.filter((conversation) => conversation.unread).length
  const starredCount = conversations.filter((conversation) => conversation.starred).length
  const repliesSent = conversations.reduce(
    (count, conversation) => count + conversation.messages.filter((message) => message.fromMe).length,
    0
  )

  const filteredConversations = useMemo(() => {
    return conversations.filter((conversation) => {
      const matchesSearch =
        conversation.participant.toLowerCase().includes(searchTerm.toLowerCase()) ||
        conversation.preview.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesTab =
        filterTab === 'all' ||
        (filterTab === 'unread' && conversation.unread) ||
        (filterTab === 'starred' && conversation.starred)

      return matchesSearch && matchesTab
    })
  }, [conversations, filterTab, searchTerm])

  const selectedConversation = conversations.find((conversation) => conversation.id === selectedId) || null

  const handleSelectConversation = (conversationId) => {
    setSelectedId(conversationId)
    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === conversationId ? { ...conversation, unread: false } : conversation
      )
    )
  }

  const handleToggleStar = (event, conversationId) => {
    event.stopPropagation()
    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === conversationId
          ? { ...conversation, starred: !conversation.starred }
          : conversation
      )
    )
  }

  const handleSendReply = () => {
    if (!selectedConversation) return
    const text = replyText.trim()
    if (!text) return

    const newMessage = {
      id: Date.now(),
      sender: 'You',
      text,
      sentAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      fromMe: true,
    }

    setConversations((prev) =>
      prev.map((conversation) => {
        if (conversation.id !== selectedConversation.id) return conversation
        return {
          ...conversation,
          preview: text,
          time: 'Now',
          messages: [...conversation.messages, newMessage],
        }
      })
    )
    setReplyText('')
  }

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Messages Center</h1>
        <div className="hidden md:flex items-center gap-2 text-sm">
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">Unread: {unreadCount}</span>
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-semibold">Starred: {starredCount}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Total</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{totalConversations}</p>
        </div>
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <p className="text-xs text-blue-700 font-semibold uppercase tracking-wide">Unread</p>
          <p className="text-2xl font-bold text-blue-700 mt-1">{unreadCount}</p>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs text-amber-700 font-semibold uppercase tracking-wide">Starred</p>
          <p className="text-2xl font-bold text-amber-700 mt-1">{starredCount}</p>
        </div>
        <div className="rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="text-xs text-green-700 font-semibold uppercase tracking-wide">Replies Sent</p>
          <p className="text-2xl font-bold text-green-700 mt-1">{repliesSent}</p>
        </div>
      </div>

      <div className="min-h-[520px] grid grid-cols-1 lg:grid-cols-[340px_1fr] xl:grid-cols-[390px_1fr] gap-4">
        <aside className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
            <p className="text-sm uppercase tracking-wide text-blue-100">Inbox</p>
            <p className="text-xl font-bold mt-1">Care Team Conversations</p>
          </div>

          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search size={16} className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search staff, teams, or notes"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-300 bg-white text-sm outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex gap-2 mt-3 text-xs font-semibold">
              <button
                onClick={() => setFilterTab('all')}
                className={`px-3 py-2 rounded-xl ${filterTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilterTab('unread')}
                className={`px-3 py-2 rounded-xl ${filterTab === 'unread' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Unread
              </button>
              <button
                onClick={() => setFilterTab('starred')}
                className={`px-3 py-2 rounded-xl ${filterTab === 'starred' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Starred
              </button>
            </div>
          </div>

          <div className="p-3 space-y-2 overflow-y-auto bg-gray-50">
            {filteredConversations.length === 0 && (
              <p className="text-sm text-gray-500 p-3">No conversations found.</p>
            )}

            {filteredConversations.map((conversation) => {
              const isSelected = selectedId === conversation.id
              return (
                <button
                  key={conversation.id}
                  onClick={() => handleSelectConversation(conversation.id)}
                  className={`w-full text-left rounded-xl p-3 border transition ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50/40'}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="h-11 w-11 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {conversation.avatar}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="font-semibold text-gray-900 truncate">{conversation.participant}</p>
                          <p className="text-xs text-gray-500 truncate">{conversation.role}</p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {conversation.unread && <span className="h-2 w-2 rounded-full bg-green-500" />}
                          <Star
                            size={15}
                            onClick={(event) => handleToggleStar(event, conversation.id)}
                            className={conversation.starred ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}
                          />
                        </div>
                      </div>

                      <p className="text-gray-700 text-xs mt-2 line-clamp-2">{conversation.preview}</p>
                      <p className="text-[11px] text-gray-500 mt-1">{conversation.time}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </aside>

        <section className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col bg-gradient-to-b from-slate-50 to-white">
          {!selectedConversation && (
            <div className="h-full flex items-center justify-center text-center p-8">
              <div>
                <div className="mx-auto h-20 w-20 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <Bell size={34} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mt-5">Select a Conversation</h2>
                <p className="text-gray-600 mt-2">Open any conversation to review updates and send a reply</p>
              </div>
            </div>
          )}

          {selectedConversation && (
            <>
              <div className="border-b border-gray-200 bg-white px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-gray-900">{selectedConversation.participant}</p>
                  <p className="text-sm text-gray-600">{selectedConversation.role}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">Active Thread</span>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {selectedConversation.messages.map((message) => (
                  <div key={message.id} className={`max-w-2xl ${message.fromMe ? 'ml-auto' : ''}`}>
                    <div className={`rounded-2xl px-4 py-3 shadow-sm ${message.fromMe ? 'bg-blue-600 text-white rounded-br-md' : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md'}`}>
                      <p className="text-sm leading-6">{message.text}</p>
                    </div>
                    <p className={`text-xs mt-1 ${message.fromMe ? 'text-right text-blue-700' : 'text-gray-500'}`}>
                      {message.sender} • {message.sentAt}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2">
                  <input
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleSendReply()
                      }
                    }}
                    placeholder="Write a response for this conversation"
                    className="flex-1 rounded-xl border border-gray-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    onClick={handleSendReply}
                    className="inline-flex items-center gap-2 rounded-xl bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 font-semibold"
                  >
                    <Send size={16} />
                    Reply
                  </button>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  )
}

export default Messages