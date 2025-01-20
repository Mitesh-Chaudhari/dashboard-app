'use client'

import { useState } from 'react'
import { DashboardProvider } from './components/DashboardContext'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <DashboardProvider>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <Layout setIsDarkMode={setIsDarkMode}>
          <Dashboard />
        </Layout>
      </div>
    </DashboardProvider>
  )
}