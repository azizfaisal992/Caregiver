import React, { useMemo, useState } from 'react'
import { Download, Pencil, Plus, Printer } from 'lucide-react'

const Incidents = () => {
  const [isActiveOnly, setIsActiveOnly] = useState(true)
  const [rows, setRows] = useState([
    {
      id: 1,
      date: '3/8/2026',
      receivedBy: 'SwyftCG',
      receivedFrom: 'Caregiver',
      reportedBy: 'Epps, Christopher',
      incidentDate: '3/8/2026',
      involvedPerson: 'Epps, Christopher',
      incidentType: 'Medication Error',
      resolutionDate: '',
      status: 'Open',
      active: true,
    },
    {
      id: 2,
      date: '2/20/2026',
      receivedBy: 'SwyftCG',
      receivedFrom: 'Caregiver',
      reportedBy: 'Sykes, Crishonda',
      incidentDate: '2/20/2026',
      involvedPerson: 'Green, Deborah',
      incidentType: 'Missed Visit',
      resolutionDate: '',
      status: 'Open',
      active: true,
    },
    {
      id: 3,
      date: '2/16/2026',
      receivedBy: 'SwyftCG',
      receivedFrom: 'Caregiver',
      reportedBy: 'Beisle, Tonya',
      incidentDate: '2/16/2026',
      involvedPerson: 'Chace, William H',
      incidentType: 'Documentation',
      resolutionDate: '2/18/2026',
      status: 'Reviewed',
      active: true,
    },
    {
      id: 4,
      date: '1/8/2026',
      receivedBy: 'SwyftCG',
      receivedFrom: 'Caregiver',
      reportedBy: 'Anderson, Lisa',
      incidentDate: '1/8/2026',
      involvedPerson: 'Jansen, Thomas J',
      incidentType: 'Injury',
      resolutionDate: '',
      status: 'Open',
      active: true,
    },
    {
      id: 5,
      date: '9/12/2025',
      receivedBy: 'SwyftCG',
      receivedFrom: 'Caregiver',
      reportedBy: 'Bright, Turosia E',
      incidentDate: '9/12/2025',
      involvedPerson: 'Bright, Turosia E',
      incidentType: 'Behavioral',
      resolutionDate: '9/15/2025',
      status: 'Closed',
      active: false,
    },
  ])

  const incidentRows = useMemo(() => {
    if (!isActiveOnly) return rows
    return rows.filter((row) => row.active)
  }, [rows, isActiveOnly])

  const handleAddNew = () => {
    const newIncident = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      receivedBy: 'SwyftCG',
      receivedFrom: 'Caregiver',
      reportedBy: 'New Reporter',
      incidentDate: new Date().toLocaleDateString(),
      involvedPerson: 'New Client',
      incidentType: 'General',
      resolutionDate: '',
      status: 'Open',
      active: true,
    }
    setRows((prev) => [newIncident, ...prev])
  }

  const toggleRowActive = (rowId) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === rowId ? { ...row, active: !row.active } : row
      )
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">SEARCH</h1>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-gray-700">ACTIVE</span>
          <button
            onClick={() => setIsActiveOnly((prev) => !prev)}
            className={`relative inline-flex h-7 w-14 items-center rounded-full transition ${isActiveOnly ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${isActiveOnly ? 'translate-x-7' : 'translate-x-1'}`}
            />
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
        <div className="p-3 border-b border-gray-200 flex flex-wrap gap-2">
          <button
            onClick={handleAddNew}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm px-3 py-1.5 rounded"
          >
            <Plus size={14} />
            Add New
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm px-3 py-1.5 rounded">
            <Download size={14} />
            Export to Excel
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm px-3 py-1.5 rounded">
            <Printer size={14} />
            Print
          </button>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm px-3 py-1.5 rounded">
            <Printer size={14} />
            Print Summary
          </button>
        </div>

        <div className="overflow-auto">
          <table className="w-full min-w-[1000px] lg:min-w-[1400px]">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-700">Received By</th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-700">Received From</th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-700">Reported By</th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-700">Incident Date</th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-700">Involved Person</th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-700">Incident Type</th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-700">Resolution Date</th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-700">Print</th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-700">Active?</th>
              </tr>
            </thead>
            <tbody>
              {incidentRows.map((incident) => (
                <tr key={incident.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm">
                    <button className="inline-flex items-center gap-1 bg-gray-100 border border-gray-300 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                      <Pencil size={12} />
                      Edit
                    </button>
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-800">{incident.date}</td>
                  <td className="px-3 py-3 text-sm text-gray-800">{incident.receivedBy}</td>
                  <td className="px-3 py-3 text-sm text-gray-800">{incident.receivedFrom}</td>
                  <td className="px-3 py-3 text-sm text-gray-800">{incident.reportedBy}</td>
                  <td className="px-3 py-3 text-sm text-gray-800">{incident.incidentDate}</td>
                  <td className="px-3 py-3 text-sm text-gray-800">{incident.involvedPerson}</td>
                  <td className="px-3 py-3 text-sm text-gray-800">{incident.incidentType}</td>
                  <td className="px-3 py-3 text-sm text-gray-700">{incident.resolutionDate || '-'}</td>
                  <td className="px-3 py-3 text-sm">
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${incident.status === 'Open' ? 'bg-yellow-100 text-yellow-800' : incident.status === 'Reviewed' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                      {incident.status}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-sm">
                    <button className="text-gray-700 hover:text-gray-900">
                      <Printer size={16} />
                    </button>
                  </td>
                  <td className="px-3 py-3 text-sm">
                    <input
                      type="checkbox"
                      checked={incident.active}
                      onChange={() => toggleRowActive(incident.id)}
                    />
                  </td>
                </tr>
              ))}

              {incidentRows.length === 0 && (
                <tr>
                  <td colSpan={12} className="px-4 py-10 text-center text-sm text-gray-500">
                    No incidents available for this filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-600">
          Showing {incidentRows.length} of {rows.length} incidents
        </div>
      </div>
    </div>
  )
}

export default Incidents