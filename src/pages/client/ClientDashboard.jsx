import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Calendar, MessageSquare, Phone, Activity } from "lucide-react";

const ClientDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Welcome Back</h1>
      
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
          <p className="text-purple-100">Care Team Messages</p>
          <p className="text-2xl font-bold">2 new</p>
          <p className="text-sm text-purple-100 mt-2">Tap to message or call care team</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
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
            <button
              onClick={() => navigate('/client/careplan')}
              className="w-full text-left p-3 hover:bg-gray-100 rounded transition"
            >
              📋 View Care Plan
            </button>
            <button
              onClick={() => navigate('/client/medication')}
              className="w-full text-left p-3 hover:bg-gray-100 rounded transition"
            >
              💊 My Medications
            </button>
            <button
              onClick={() => navigate('/client/care-team')}
              className="w-full text-left p-3 hover:bg-gray-100 rounded transition"
            >
              💬 Contact Care Team (Message/Call)
            </button>
            <button
              onClick={() => navigate('/client/health-records')}
              className="w-full text-left p-3 hover:bg-gray-100 rounded transition"
            >
              📊 Health Records (Last 7 Days)
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare size={20} className="text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">Contact Care Team</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">Send messages or call your assigned team directly.</p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/client/care-team')}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              <MessageSquare size={16} />
              Message Team
            </button>
            <button
              onClick={() => navigate('/client/care-team')}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              <Phone size={16} />
              Call Team
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-2 mb-3">
            <Activity size={20} className="text-orange-600" />
            <h3 className="text-xl font-bold text-gray-800">Health Record - Last 7 Days</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Latest vitals summary from your recent visits.</p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Blood Pressure: 126/82 (latest)</li>
            <li>Blood Sugar: 112 mg/dL (latest)</li>
            <li>Pulse: 76 bpm (latest)</li>
          </ul>
          <button
            onClick={() => navigate('/client/health-records')}
            className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold"
          >
            View full weekly record
          </button>
        </div>
      </div>
    </div>
  );
};
export default ClientDashboard;
