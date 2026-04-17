import React, { useState } from 'react'
import { FileText, Download, Eye, Send } from 'lucide-react'

const Billing = () => {
  const [invoices] = useState([
    { id: 1, client: 'Mrs. Sarah Smith', period: 'April 2026', amount: '$4,800', status: 'Sent', dueDate: '2026-05-01' },
    { id: 2, client: 'Mr. Robert Johnson', period: 'April 2026', amount: '$3,200', status: 'Paid', dueDate: '2026-04-25' },
    { id: 3, client: 'Mrs. Elizabeth Brown', period: 'April 2026', amount: '$5,600', status: 'Draft', dueDate: '2026-05-05' },
  ])

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Billing Management</h1>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
          <FileText size={20} className="mr-2" />
          Generate Invoice
        </button>
      </div>

      {/* Billing Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-semibold">Total Revenue</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">$13,600</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-semibold">Paid Invoices</p>
          <p className="text-3xl font-bold text-green-600 mt-2">$3,200</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-semibold">Pending</p>
          <p className="text-3xl font-bold text-yellow-600 mt-2">$4,800</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 text-sm font-semibold">Draft</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">$5,600</p>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Client</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Period</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Due Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{invoice.client}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{invoice.period}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">{invoice.amount}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{invoice.dueDate}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                    invoice.status === 'Sent' ? 'bg-blue-100 text-blue-800' : 
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Eye size={16} />
                  </button>
                  {invoice.status === 'Draft' && (
                    <button className="text-green-600 hover:text-green-800">
                      <Send size={16} />
                    </button>
                  )}
                  <button className="text-purple-600 hover:text-purple-800">
                    <Download size={16} />
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

export default Billing
