import React from 'react'
import { FileText } from 'lucide-react'

const Forms = () => {
  const forms = [
    { id: 1, name: 'Initial Assessment Form', status: 'Active', lastUpdated: '2026-04-15', usedBy: 42 },
    { id: 2, name: 'Care Plan Review', status: 'Active', lastUpdated: '2026-04-10', usedBy: 28 },
    { id: 3, name: 'Incident Report Form', status: 'Active', lastUpdated: '2026-04-12', usedBy: 15 },
    { id: 4, name: 'Client Satisfaction Survey', status: 'Draft', lastUpdated: '2026-04-08', usedBy: 0 },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Forms Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Total Forms</p><p className="text-3xl font-bold text-blue-600 mt-2">{forms.length}</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Active</p><p className="text-3xl font-bold text-green-600 mt-2">3</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">In Draft</p><p className="text-3xl font-bold text-yellow-600 mt-2">1</p></div>
        <div className="bg-white rounded-lg shadow p-4"><p className="text-gray-600 text-sm font-semibold">Total Usage</p><p className="text-3xl font-bold text-purple-600 mt-2">85</p></div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">Form Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Last Updated</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Times Used</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form) => (
              <tr key={form.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{form.name}</td>
                <td className="px-6 py-4"><span className={`px-3 py-1 rounded text-xs font-semibold ${form.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{form.status}</span></td>
                <td className="px-6 py-4 text-sm text-gray-600">{form.lastUpdated}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{form.usedBy}</td>
                <td className="px-6 py-4 text-sm"><button className="text-blue-600 hover:text-blue-800">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Forms
