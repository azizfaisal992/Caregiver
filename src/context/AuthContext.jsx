import React, { useState, useEffect } from 'react'
import { AuthContext } from './authContext.js'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check if user is already logged in
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } finally {
      setLoading(false)
    }
  }, [])

  const login = (email, password, role) => {
    // Mock authentication - accepts any email/password combination
    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      role, // 'admin', 'caregiver', or 'client'
      name: email.split('@')[0],
      loginTime: new Date().toLocaleString(),
    }
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    return userData
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
