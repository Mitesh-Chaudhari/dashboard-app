'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type WidgetConfig = {
  id: string
  type: string
  position: { x: number; y: number }
}

type DashboardContextType = {
  widgets: WidgetConfig[]
  updateWidgetPosition: (id: string, position: { x: number; y: number }) => void
  dateRange: { start: Date; end: Date }
  setDateRange: (range: { start: Date; end: Date }) => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export const useDashboard = () => {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider')
  }
  return context
}

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [widgets, setWidgets] = useState<WidgetConfig[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dashboardWidgets')
      return saved ? JSON.parse(saved) : defaultWidgets
    }
    return defaultWidgets
  })

  const [dateRange, setDateRange] = useState({ start: new Date(2023, 0, 1), end: new Date() })

  useEffect(() => {
    localStorage.setItem('dashboardWidgets', JSON.stringify(widgets))
  }, [widgets])

  const updateWidgetPosition = (id: string, position: { x: number; y: number }) => {
    setWidgets(widgets.map(widget => 
      widget.id === id ? { ...widget, position } : widget
    ))
  }

  return (
    <DashboardContext.Provider value={{ widgets, updateWidgetPosition, dateRange, setDateRange }}>
      {children}
    </DashboardContext.Provider>
  )
}

const defaultWidgets: WidgetConfig[] = [
  { id: 'revenue', type: 'line', position: { x: 0, y: 0 } },
  { id: 'sales', type: 'bar', position: { x: 1, y: 0 } },
  { id: 'customers', type: 'pie', position: { x: 0, y: 1 } },
  { id: 'kpi', type: 'kpi', position: { x: 1, y: 1 } },
]

