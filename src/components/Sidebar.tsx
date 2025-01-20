'use client'

import React from 'react'
import { Home, BarChart2, Users, Settings } from 'lucide-react'
import { cn } from '../utils'

type SidebarProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: BarChart2, label: 'Analytics' },
    { icon: Users, label: 'Customers' },
    { icon: Settings, label: 'Settings' },
  ]

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out transform',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button onClick={() => setIsOpen(false)} className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

