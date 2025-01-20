'use client'

import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

type LayoutProps = {
  children: React.ReactNode
  setIsDarkMode: (isDark: boolean) => void
}

const Layout: React.FC<LayoutProps> = ({ children, setIsDarkMode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header setIsDarkMode={setIsDarkMode} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout

