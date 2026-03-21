import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 3, error, disabled, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border-0 bg-surface-container px-3 py-2 text-sm text-foreground shadow-sm transition-all duration-200 ease-out resize-y",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-2 border-destructive bg-destructive/5",
          className
        )}
        ref={ref}
        rows={rows}
        disabled={disabled}
        aria-invalid={error ? "true" : "false"}
        {...props}
      />
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea }
