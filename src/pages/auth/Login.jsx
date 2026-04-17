import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext.js'
import { LogIn } from 'lucide-react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('admin')
  const [error, setError] = useState('')
  
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')
    
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    try {
      login(email, password, role)
      
      // Redirect based on role
      const redirects = {
        admin: '/admin/dashboard',
        caregiver: '/caregiver/dashboard',
        client: '/client/dashboard',
      }
      navigate(redirects[role])
    } catch {
      setError('Login failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8">
        <div className="flex justify-center mb-8">
          <div className="bg-blue-100 p-4 rounded-full">
            <LogIn className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Caregiver Management
        </h1>
        <p className="text-center text-gray-600 mb-8">Sign in to your account</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Role Selection */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="admin">Administrator</option>
              <option value="caregiver">Caregiver</option>
              <option value="client">Client / Family</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 mt-6"
          >
            Sign In
          </button>
        </form>

        {/* Demo Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-600 text-center mb-3 font-semibold">Demo Credentials:</p>
          <div className="space-y-2 text-xs text-gray-600">
            <p>📧 Email: <span className="font-mono">admin@example.com</span></p>
            <p>🔐 Password: <span className="font-mono">any password</span></p>
            <p className="text-center text-gray-500 mt-2">Choose any role to login</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
