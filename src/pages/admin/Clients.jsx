import React, { useState } from 'react'
import { Plus, Search, Edit, Trash2, Phone, MapPin } from 'lucide-react'

const Clients = () => {
  const [clients] = useState([
    { id: 1, name: 'Mrs. Sarah Smith', age: 72, address: '123 Oak St, Boston MA', phone: '617-555-0101', status: 'Active' },
    { id: 2, name: 'Mr. Robert Johnson', age: 68, address: '456 Elm Ave, Boston MA', phone: '617-555-0102', status: 'Active' },
    { id: 3, name: 'Mrs. Elizabeth Brown', age: 85, address: '789 Pine Rd, Boston MA', phone: '617-555-0103', status: 'Active' },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Clients Management</h1>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
          <Plus size={20} className="mr-2" />
          Add Client
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search clients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div key={client.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
                <p className="text-sm text-gray-500">Age: {client.age}</p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                {client.status}
              </span>
            </div>

            <div className="space-y-2 mb-4 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                {client.address}
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                {client.phone}
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t">
              <button className="flex-1 text-blue-600 hover:text-blue-800 flex items-center justify-center">
                <Edit size={16} className="mr-1" />
                Edit
              </button>
              <button className="flex-1 text-red-600 hover:text-red-800 flex items-center justify-center">
                <Trash2 size={16} className="mr-1" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients
