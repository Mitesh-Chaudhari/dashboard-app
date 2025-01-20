'use client'

import React from 'react'
import { useDashboard } from './DashboardContext'
import Widget from './Widget'
import ExportButton from './ExportButton'

const Dashboard: React.FC = () => {
  const { widgets, updateWidgetPosition } = useDashboard()

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold dark:text-white">Analytics Dashboard</h1>
        <div className="flex items-center space-x-4">
          <ExportButton />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {widgets.map((widget) => (
          <Widget
            key={widget.id}
            id={widget.id}
            type={widget.type}
            position={widget.position}
            onPositionChange={(newPosition) => updateWidgetPosition(widget.id, newPosition)}
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard

