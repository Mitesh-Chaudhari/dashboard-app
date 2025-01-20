import React, { useState } from 'react'

interface PopoverProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export const Popover: React.FC<PopoverProps> = ({ children, open: controlledOpen, onOpenChange }) => {
  const [internalOpen, setInternalOpen] = useState(false)
  const isControlled = controlledOpen !== undefined

  const isOpen = isControlled ? controlledOpen : internalOpen

  const setOpen = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen)
    }
    onOpenChange && onOpenChange(newOpen)
  }

  return (
    <div className="relative inline-block">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isOpen, setOpen } as any)
        }
        return child
      })}
    </div>
  )
}

interface PopoverTriggerProps {
  children: React.ReactNode
  isOpen?: boolean
  setOpen?: (open: boolean) => void
}

export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({ children, isOpen, setOpen }) => {
  return (
    <div onClick={() => setOpen && setOpen(!isOpen)}>
      {children}
    </div>
  )
}

interface PopoverContentProps {
  children: React.ReactNode
  isOpen?: boolean
}

export const PopoverContent: React.FC<PopoverContentProps> = ({ children, isOpen }) => {
  if (!isOpen) return null

  return (
    <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg">
      {children}
    </div>
  )
}

