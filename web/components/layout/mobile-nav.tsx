"use client"

import * as React from "react"
import { X, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger?: React.ReactNode
}

const MobileNav = React.forwardRef<HTMLDivElement, MobileNavProps>(
  ({ className, trigger, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener("keydown", handleEscape)
        document.body.style.overflow = "hidden"
      }

      return () => {
        document.removeEventListener("keydown", handleEscape)
        document.body.style.overflow = "unset"
      }
    }, [isOpen])

    return (
      <>
        {/* Trigger Button */}
        {trigger || (
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        )}

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            
            {/* Drawer */}
            <div
              ref={ref}
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-nav-title"
              className={cn(
                "fixed inset-y-0 left-0 z-50 w-4/5 max-w-xs bg-surface shadow-elevated md:hidden",
                "transform transition-transform duration-300 ease-out",
                isOpen ? "translate-x-0" : "-translate-x-full",
                className
              )}
              {...props}
            >
              <div className="flex items-center justify-between p-4 border-b border-outline-variant">
                <h2 id="mobile-nav-title" className="text-lg font-semibold">
                  Navigation
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="p-4 overflow-y-auto h-[calc(100vh-73px)]">
                {children}
              </nav>
            </div>
          </>
        )}
      </>
    )
  }
)

MobileNav.displayName = "MobileNav"

export { MobileNav }
