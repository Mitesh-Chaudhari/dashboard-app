'use client'

import React from 'react'
import { Moon, Sun } from 'lucide-react'
import Button from './ui/Button'

type ThemeToggleProps = {
  setIsDarkMode: (isDark: boolean) => void
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ setIsDarkMode }) => {
  const [isDark, setIsDark] = React.useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    setIsDarkMode(!isDark)
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {isDark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ThemeToggle

