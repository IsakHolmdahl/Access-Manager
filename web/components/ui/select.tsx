"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { ChevronDown, Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border-0 bg-surface-container px-3 py-2 text-sm text-foreground shadow-sm transition-all duration-200 ease-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "[&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon className="flex">
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = "SelectTrigger"

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Popup>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Popup>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Positioner sideOffset={8}>
      <SelectPrimitive.Popup
        ref={ref}
        className={cn(
          "relative z-50 min-w-[8rem] overflow-hidden rounded-md border-0 bg-surface-container shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          className
        )}
        {...props}
      >
        <SelectPrimitive.ScrollUpArrow />
        <SelectPrimitive.List className="p-1">
          {children}
        </SelectPrimitive.List>
        <SelectPrimitive.ScrollDownArrow />
      </SelectPrimitive.Popup>
    </SelectPrimitive.Positioner>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = "SelectContent"

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.GroupLabel>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.GroupLabel>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.GroupLabel
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = "SelectLabel"

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors",
      "focus:bg-surface-container-high focus:text-foreground",
      "data-[selected]:bg-primary data-[selected]:text-primary-foreground",
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = "SelectItem"

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-outline-variant", className)}
    {...props}
  />
))
SelectSeparator.displayName = "SelectSeparator"

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
}
