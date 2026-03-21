"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar"

export interface NavigationItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  icon: React.ReactNode
  label: string
  active?: boolean
}

const NavigationItem = React.forwardRef<HTMLAnchorElement, NavigationItemProps>(
  ({ className, href, icon, label, active: activeProp, ...props }, ref) => {
    const pathname = usePathname()
    const isActive = activeProp !== undefined ? activeProp : pathname === href
    const { collapsed } = useSidebar() || { collapsed: false }

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ease-out",
          "hover:bg-surface-container",
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-foreground",
          collapsed && "justify-center",
          className
        )}
        aria-current={isActive ? "page" : undefined}
        {...props}
      >
        <span className="flex-shrink-0">{icon}</span>
        {!collapsed && <span className="text-sm font-medium truncate">{label}</span>}
      </Link>
    )
  }
)

NavigationItem.displayName = "NavigationItem"

export { NavigationItem }
