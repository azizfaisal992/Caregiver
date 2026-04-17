import React from "react";
import { Heart, Calendar, Pill, MessageSquare } from "lucide-react";

const ClientDashboard = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome Back</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow p-6">
          <Heart size={32} className="mb-4 opacity-80" />
          <p className="text-blue-100">Primary Caregiver</p>
          <p className="text-2xl font-bold">Mrs. Jennifer Lee RN</p>
          <p className="text-sm text-blue-100 mt-2">Available: Mon-Fri 8AM-6PM</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow p-6">
          <Calendar size={32} className="mb-4 opacity-80" />
          <p className="text-green-100">This Week's Visits</p>
          <p className="text-2xl font-bold">5 visits</p>
          <p className="text-sm text-green-100 mt-2">Next: Tomorrow 10:00 AM</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg shadow p-6">
          <MessageSquare size={32} className="mb-4 opacity-80" />
          <p className="text-purple-100">Unread Messages</p>
          <p className="text-2xl font-bold">2 new</p>
          <p className="text-sm text-purple-100 mt-2">From care team</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Visits</h2>
          <div className="space-y-3">
            <div className="p-4 border border-gray-200 rounded hover:bg-gray-50">
              <p className="font-semibold text-gray-800">Tomorrow - 10:00 AM</p>
              <p className="text-sm text-gray-600">Physical Therapy with Mrs. Jennifer Lee</p>
              <p className="text-xs text-gray-500 mt-1">Duration: 1 hour</p>
            </div>
            <div className="p-4 border border-gray-200 rounded hover:bg-gray-50">
              <p className="font-semibold text-gray-800">Apr 19 - 02:00 PM</p>
              <p className="text-sm text-gray-600">Medication Management Check</p>
              <p className="text-xs text-gray-500 mt-1">Duration: 30 minutes</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Links</h2>
          <div className="space-y-2">
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">
              📋 View Care Plan
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">
              💊 My Medications
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">
              📞 Contact Care Team
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-100 rounded transition">
              📊 Health Records
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientDashboard;
