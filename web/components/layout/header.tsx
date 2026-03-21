import * as React from "react"

import { cn } from "@/lib/utils"

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  navigation?: React.ReactNode
  actions?: React.ReactNode
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, logo, navigation, actions, children, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(
        "sticky top-0 z-50 w-full border-b border-outline-variant bg-surface shadow-sm",
        className
      )}
      {...props}
    >
      {children || (
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-6">
            {logo && <div className="flex-shrink-0">{logo}</div>}
            {navigation && (
              <nav className="hidden md:flex items-center gap-6">
                {navigation}
              </nav>
            )}
          </div>
          {actions && (
            <div className="flex items-center gap-4">
              {actions}
            </div>
          )}
        </div>
      )}
    </header>
  )
)

Header.displayName = "Header"

export { Header }
