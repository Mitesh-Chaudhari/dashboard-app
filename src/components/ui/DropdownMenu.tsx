import React, { useState } from 'react'

interface DropdownMenuProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, open, onOpenChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isControlled = open !== undefined;
  const currentState = isControlled ? open : isOpen;

  const handleToggle = () => {
    const newState = !currentState;
    if (!isControlled) {
      setIsOpen(newState); // Update internal state only if uncontrolled
    }
    onOpenChange?.(newState);
  };

  return (
    <div className="relative inline-block text-left">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === DropdownMenuTrigger) {
            return React.cloneElement(child, {
              onClick: handleToggle,
              'aria-expanded': currentState,
            });
          } else if (child.type === DropdownMenuContent && currentState) {
            return child;
          }
        }
        return null;
      })}
    </div>
  );
};



interface DropdownMenuTriggerProps {
  children: React.ReactNode
  asChild?: boolean
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children, asChild }) => {
  if (asChild) {
    return <>{children}</>
  }
  return <button>{children}</button>
}

interface DropdownMenuContentProps {
  children: React.ReactNode
}

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ children }) => {
  return (
    <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {children}
      </div>
    </div>
  )
}

interface DropdownMenuItemProps {
  children: React.ReactNode
  onClick?: () => void
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ children, onClick }) => {
  return (
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      role="menuitem"
      onClick={(e) => {
        e.preventDefault()
        onClick?.()
      }}
    >
      {children}
    </a>
  )
}

export const DropdownMenuLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="block px-4 py-2 text-sm text-gray-700">{children}</span>
}

export const DropdownMenuSeparator: React.FC = () => {
  return <hr className="my-1" />
}

