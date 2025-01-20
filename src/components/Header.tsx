import React, { useState } from 'react'
import { Bell, User, Settings } from 'lucide-react'
import Button from './ui/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/DropdownMenu'
import ThemeToggle from './ThemeToggle'

type HeaderProps = {
  setIsDarkMode: (isDark: boolean) => void
  toggleSidebar: () => void
}

const Header: React.FC<HeaderProps> = ({ setIsDarkMode, toggleSidebar }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  console.log("isUserMenuOpen",isUserMenuOpen);
  
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <Button variant="ghost" onClick={toggleSidebar}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Button>
      <div className="flex items-center">
        <ThemeToggle setIsDarkMode={setIsDarkMode} />
        <Button variant="ghost" className="ml-4 relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">3</span>
        </Button>
        <DropdownMenu open={isUserMenuOpen} onOpenChange={setIsUserMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="ml-4"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <User className="w-6 h-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" className="ml-4" onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
          <Settings className="w-6 h-6" />
        </Button>
      </div>
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg settings-wrapper" style={{height: '260px', width:'380px'}}>
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <ul>
              <li>Account Settings</li>
              <li>Theme Settings</li>
              <li>Other Settings</li>
            </ul>
            <Button onClick={() => setIsSettingsOpen(false)}>Close</Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

