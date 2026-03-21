"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultCollapsed?: boolean
  collapsible?: boolean
}

const SidebarContext = React.createContext<{
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}>({
  collapsed: false,
  setCollapsed: () => {},
})

export const useSidebar = () => React.useContext(SidebarContext)

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, defaultCollapsed = false, collapsible = true, children, ...props }, ref) => {
    const [collapsed, setCollapsed] = React.useState(defaultCollapsed)

    return (
      <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
        <aside
          ref={ref}
          role="navigation"
          aria-label="Sidebar navigation"
          className={cn(
            "hidden md:flex flex-col bg-surface-container-low border-r border-outline-variant transition-all duration-300 ease-out",
            collapsed ? "w-20" : "w-60",
            className
          )}
          {...props}
        >
          {collapsible && (
            <div className="flex justify-end p-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCollapsed(!collapsed)}
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {collapsed ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronLeft className="h-4 w-4" />
                )}
              </Button>
            </div>
          )}
          <nav className="flex-1 overflow-y-auto py-4">
            {children}
          </nav>
        </aside>
      </SidebarContext.Provider>
    )
  }
)

Sidebar.displayName = "Sidebar"

export { Sidebar, SidebarContext }
