import React, { useMemo, useState } from 'react'
import { Download, Mail, Plus, Search, Trash2 } from 'lucide-react'

const Forms = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIds, setSelectedIds] = useState([])
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: 'Raquel',
      lastName: 'Acevedo',
      companyName: 'CareFirst Home Services',
      city: 'Gainesville',
      zip: '32605',
      phone: '(352) 231-3661',
      mobile: '',
      email: 'raquel.acevedo@carefirst.com',
      tags: ['ClientActive', 'Primary Payer'],
      active: true,
    },
    {
      id: 2,
      firstName: 'Beacy',
      lastName: 'Adams',
      companyName: 'Northside Clinical Group',
      city: 'Chiefland',
      zip: '32626',
      phone: '(352) 316-6555',
      mobile: '',
      email: 'beacy.adams@nsgroup.com',
      tags: ['ClientInactive', 'Primary Payer'],
      active: false,
    },
    {
      id: 3,
      firstName: 'LaQuisha',
      lastName: 'Addison',
      companyName: 'Sunrise Care Partners',
      city: 'Ocala',
      zip: '34471',
      phone: '(352) 246-8915',
      mobile: '(904) 897-2321',
      email: 'l.addison@sunrisecare.com',
      tags: ['Caregiver-Applicant'],
      active: true,
    },
    {
      id: 4,
      firstName: 'Donna',
      lastName: 'Alexander',
      companyName: 'MedBridge Coordination',
      city: 'Lecanto',
      zip: '34461',
      phone: '(904) 910-7873',
      mobile: '',
      email: 'd.alexander@medbridge.com',
      tags: ['ClientInactive', 'Primary Payer'],
      active: true,
    },
    {
      id: 5,
      firstName: 'Charlie',
      lastName: 'Allen',
      companyName: 'RiverCare Agency',
      city: 'Lake City',
      zip: '32025',
      phone: '(386) 361-0058',
      mobile: '',
      email: 'charlie.allen@rivercare.org',
      tags: ['ClientInactive', 'Primary Payer'],
      active: false,
    },
  ])

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const searchable = [
        contact.firstName,
        contact.lastName,
        contact.companyName,
        contact.city,
        contact.phone,
        contact.mobile,
        contact.email,
        contact.tags.join(' '),
      ]
        .join(' ')
        .toLowerCase()

      return searchable.includes(searchTerm.toLowerCase())
    })
  }, [contacts, searchTerm])

  const allVisibleSelected =
    filteredContacts.length > 0 && filteredContacts.every((contact) => selectedIds.includes(contact.id))

  const toggleSelectAllVisible = () => {
    if (allVisibleSelected) {
      setSelectedIds((prev) => prev.filter((id) => !filteredContacts.some((contact) => contact.id === id)))
      return
    }

    setSelectedIds((prev) => {
      const next = [...prev]
      filteredContacts.forEach((contact) => {
        if (!next.includes(contact.id)) {
          next.push(contact.id)
        }
      })
      return next
    })
  }

  const toggleSelectRow = (contactId) => {
    setSelectedIds((prev) =>
      prev.includes(contactId) ? prev.filter((id) => id !== contactId) : [...prev, contactId]
    )
  }

  const handleMassDelete = () => {
    if (selectedIds.length === 0) return
    setContacts((prev) => prev.filter((contact) => !selectedIds.includes(contact.id)))
    setSelectedIds([])
  }

  const handleToggleActive = (contactId) => {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === contactId ? { ...contact, active: !contact.active } : contact
      )
    )
  }

  const handleAddNew = () => {
    const newContact = {
      id: Date.now(),
      firstName: 'New',
      lastName: 'Contact',
      companyName: 'New Care Organization',
      city: 'TBD',
      zip: '00000',
      phone: '(000) 000-0000',
      mobile: '',
      email: 'new.contact@example.com',
      tags: ['ClientInactive'],
      active: false,
    }

    setContacts((prev) => [newContact, ...prev])
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Contacts</h1>
        <div className="w-full md:w-80 relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search contacts"
            className="w-full rounded-lg border border-gray-300 bg-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="p-3 border-b border-gray-200 flex flex-wrap items-center gap-2">
          <button
            onClick={handleAddNew}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm px-3 py-1.5 rounded"
          >
            <Plus size={14} />
            Add New
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm px-3 py-1.5 rounded">
            Global Set
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm px-3 py-1.5 rounded">
            <Mail size={14} />
            Mail Merge
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm px-3 py-1.5 rounded">
            <Download size={14} />
            Export to Excel
          </button>
          <button
            onClick={handleMassDelete}
            disabled={selectedIds.length === 0}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white text-sm px-3 py-1.5 rounded"
          >
            <Trash2 size={14} />
            Mass Delete
          </button>
        </div>

        <div className="overflow-auto">
          <table className="w-full min-w-[980px] lg:min-w-[1200px]">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-3 py-3 text-left text-sm">
                  <input type="checkbox" checked={allVisibleSelected} onChange={toggleSelectAllVisible} />
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Last Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">First Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Company Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">City</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">ZIP</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Mobile</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Tags</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Active?</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact.id} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(contact.id)}
                      onChange={() => toggleSelectRow(contact.id)}
                    />
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <button className="bg-gray-100 border border-gray-300 hover:bg-gray-200 text-gray-700 px-2.5 py-1 rounded text-xs font-semibold">
                      Edit
                    </button>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">{contact.lastName}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{contact.firstName}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{contact.companyName}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{contact.city}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{contact.zip}</td>
                  <td className="px-4 py-3 text-sm text-blue-600">{contact.phone}</td>
                  <td className="px-4 py-3 text-sm text-blue-600">{contact.mobile || '-'}</td>
                  <td className="px-4 py-3 text-sm text-blue-600 max-w-[220px] truncate">{contact.email}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex flex-wrap gap-1">
                      {contact.tags.map((tag) => (
                        <span key={tag} className="text-[11px] bg-blue-600 text-white px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <input
                      type="checkbox"
                      checked={contact.active}
                      onChange={() => handleToggleActive(contact.id)}
                    />
                  </td>
                </tr>
              ))}

              {filteredContacts.length === 0 && (
                <tr>
                  <td colSpan={12} className="px-4 py-10 text-center text-sm text-gray-500">
                    No contacts match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 bg-gray-50 border-t text-xs text-gray-600">
          Showing {filteredContacts.length} of {contacts.length} contacts
          {selectedIds.length > 0 && ` • ${selectedIds.length} selected`}
        </div>
      </div>
    </div>
  )
}

export default Forms
