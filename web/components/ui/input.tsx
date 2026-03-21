import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border-0 bg-surface-container px-3 py-2 text-sm text-foreground shadow-sm transition-all duration-200 ease-out",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-2 border-destructive bg-destructive/5",
          className
        )}
        ref={ref}
        disabled={disabled}
        aria-invalid={error ? "true" : "false"}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }
