import React from 'react'
import { FileText, Users, Heart } from 'lucide-react'

const MyCarePlan = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">My Care Plan</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-blue-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Care Overview</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 font-semibold">PRIMARY CONDITION</p>
              <p className="text-lg text-gray-800 font-semibold">Hypertension & Diabetes Management</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold">CARE LEVEL</p>
              <p className="text-lg text-gray-800 font-semibold">Intermediate Care</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-green-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Care Team</h2>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded">
              <p className="font-semibold text-gray-800">Primary Nurse</p>
              <p className="text-sm text-gray-600">Jennifer Lee, RN</p>
              <p className="text-xs text-gray-500">Available: Mon-Fri 8AM-6PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="text-red-600" size={28} />
          <h2 className="text-2xl font-bold text-gray-800">Daily Care Routine</h2>
        </div>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded">
            <p className="font-semibold text-gray-800">Morning Routine</p>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>Blood sugar monitoring</li>
              <li>Medication administration</li>
              <li>Breakfast assistance</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-200 rounded">
            <p className="font-semibold text-gray-800">Afternoon Routine</p>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>Physical therapy exercises</li>
              <li>Vital signs check</li>
              <li>Snack time with medication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyCarePlan
