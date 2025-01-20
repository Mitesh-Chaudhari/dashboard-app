'use client'

import React from 'react'
import Button from './ui/Button'
import { Download } from 'lucide-react'

const ExportButton: React.FC = () => {
  const handleExport = () => {
    // Implement export functionality here
    console.log('Exporting data...')
  }

  return (
    <Button onClick={handleExport}>
      <Download className="w-4 h-4 mr-2" />
      Export
    </Button>
  )
}

export default ExportButton

