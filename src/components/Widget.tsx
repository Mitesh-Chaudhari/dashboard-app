'use client'

import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import LineChart from './charts/LineChart'
import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'
import KPICard from './charts/KPICard'

type WidgetProps = {
  id: string
  type: string
  position: { x: number; y: number }
  onPositionChange: (position: { x: number; y: number }) => void
}

const Widget: React.FC<WidgetProps> = ({ id, type, position, onPositionChange }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { type, position },
  })

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  const renderChart = () => {
    switch (type) {
      case 'line':
        return <LineChart />
      case 'bar':
        return <BarChart />
      case 'pie':
        return <PieChart />
      case 'kpi':
        return <KPICard />
      default:
        return null
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md cursor-move chart-wrapper"
    >
      {renderChart()}
    </div>
  )
}

export default Widget

