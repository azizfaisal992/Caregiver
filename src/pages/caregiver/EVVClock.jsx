import React, { useState } from 'react'
import { MapPin, Clock, Navigation, CheckCircle, AlertCircle } from 'lucide-react'

const EVVClock = () => {
  const [clockedIn, setClockedIn] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [clockInTime, setClockInTime] = useState(null)

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleClockIn = () => {
    setClockedIn(true)
    setClockInTime(new Date())
  }

  const handleClockOut = () => {
    setClockedIn(false)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Electronic Visit Verification (EVV)</h1>

      {/* Clock Status */}
      <div className={`rounded-lg shadow-lg p-8 mb-8 ${clockedIn ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-gray-500 to-gray-600'} text-white`}>
        <div className="text-center">
          <p className="text-lg opacity-80 mb-4">Current Time</p>
          <p className="text-6xl font-bold font-mono mb-2">{currentTime.toLocaleTimeString()}</p>
          <p className="text-2xl font-semibold mb-8">{currentTime.toLocaleDateString()}</p>
          
          {clockedIn && clockInTime && (
            <div className="mt-4 pt-4 border-t-2 border-opacity-30 border-white">
              <p className="text-sm opacity-80">Clocked In Since</p>
              <p className="text-2xl font-semibold">{clockInTime.toLocaleTimeString()}</p>
            </div>
          )}
        </div>
      </div>

      {/* GPS Location & Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* GPS Location */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Navigation className="text-blue-600 mr-2" size={24} />
            <h3 className="text-xl font-semibold text-gray-800">GPS Location</h3>
          </div>
          <div className="bg-blue-50 p-4 rounded mb-4">
            <p className="text-sm text-gray-600">Current Location</p>
            <p className="text-lg font-semibold text-gray-800">123 Oak St, Boston MA</p>
            <p className="text-xs text-gray-500 mt-2">42.3601° N, 71.0589° W</p>
          </div>
          <p className="text-xs text-gray-500">Location updated every 30 seconds</p>
        </div>

        {/* Clock Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Clock className="text-green-600 mr-2" size={24} />
            <h3 className="text-xl font-semibold text-gray-800">Clock Status</h3>
          </div>
          <div className={`p-4 rounded mb-4 flex items-center ${clockedIn ? 'bg-green-50' : 'bg-yellow-50'}`}>
            {clockedIn ? (
              <>
                <CheckCircle className="text-green-600 mr-2" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <p className="text-lg font-semibold text-green-700">Clocked In</p>
                </div>
              </>
            ) : (
              <>
                <AlertCircle className="text-yellow-600 mr-2" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <p className="text-lg font-semibold text-yellow-700">Clocked Out</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Time Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={handleClockIn}
            disabled={clockedIn}
            className={`p-4 rounded-lg font-semibold text-white transition ${
              clockedIn
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            ✓ Clock In
          </button>
          <button
            onClick={handleClockOut}
            disabled={!clockedIn}
            className={`p-4 rounded-lg font-semibold text-white transition ${
              !clockedIn
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            ✕ Clock Out
          </button>
        </div>
      </div>

      {/* Visit History */}
      <div className="bg-white rounded-lg shadow p-6 mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Today's Visits</h3>
        <div className="space-y-3">
          <div className="p-4 border border-green-200 bg-green-50 rounded">
            <p className="font-semibold text-gray-800">Mrs. Sarah Smith</p>
            <p className="text-sm text-gray-600">08:00 AM - 02:00 PM (6 hours)</p>
            <p className="text-xs text-green-700 mt-1">✓ Verified</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EVVClock
