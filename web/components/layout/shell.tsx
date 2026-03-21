"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  hasSidebar?: boolean
}

const Shell = React.forwardRef<HTMLDivElement, ShellProps>(
  ({ className, hasSidebar = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex min-h-screen w-full",
        hasSidebar ? "flex-col md:flex-row" : "flex-col",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)

Shell.displayName = "Shell"

export { Shell }
