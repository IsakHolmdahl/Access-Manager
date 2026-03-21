"use client"

import * as React from "react"
import { User, Settings, LogOut, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"

export interface UserNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user?: {
    name: string
    email: string
    avatar?: string
  }
  onProfile?: () => void
  onSettings?: () => void
  onLogout?: () => void
}

const UserNav = React.forwardRef<HTMLDivElement, UserNavProps>(
  ({ className, user, onProfile, onSettings, onLogout, ...props }, ref) => {
    const handleValueChange = (value: string | null) => {
      if (!value) return
      switch (value) {
        case "profile":
          onProfile?.()
          break
        case "settings":
          onSettings?.()
          break
        case "logout":
          onLogout?.()
          break
      }
    }

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <Select value="" onValueChange={handleValueChange}>
          <SelectTrigger className="w-auto border-0 bg-transparent hover:bg-surface-container gap-2 px-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
                {user?.name?.charAt(0) || "U"}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">{user?.name || "User"}</p>
                <p className="text-xs text-muted-foreground">{user?.email || ""}</p>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </SelectTrigger>
          <SelectContent className="w-48">
            <SelectItem value="profile">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </div>
            </SelectItem>
            <SelectItem value="settings">
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </div>
            </SelectItem>
            <SelectItem value="logout">
              <div className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    )
  }
)

UserNav.displayName = "UserNav"

export { UserNav }