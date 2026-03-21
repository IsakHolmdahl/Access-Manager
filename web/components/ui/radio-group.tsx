"use client"

import * as React from "react"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { Radio as RadioPrimitive } from "@base-ui/react/radio"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})

RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioPrimitive.Root> & {
    children?: React.ReactNode
  }
>(({ className, children, ...props }, ref) => {
  return (
    <label className={cn("flex items-center gap-2 cursor-pointer", className)}>
      <RadioPrimitive.Root
        ref={ref}
        className={cn(
          "group flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-outline bg-surface-container shadow-sm transition-all duration-200 ease-out",
          "hover:border-primary/50",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:border-primary data-[state=checked]:bg-primary"
        )}
        {...props}
      >
        <RadioPrimitive.Indicator
          className={cn(
            "h-2 w-2 rounded-full bg-primary-foreground",
            "transition-all duration-200",
            "scale-0 group-data-[state=checked]:scale-100"
          )}
        />
      </RadioPrimitive.Root>
      {children}
    </label>
  )
})

RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
