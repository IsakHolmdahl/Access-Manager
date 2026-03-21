import * as React from "react"

import { cn } from "@/lib/utils"

const Main = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => (
  <main
    ref={ref}
    className={cn(
      "flex-1 p-4 md:p-6 lg:p-8",
      className
    )}
    {...props}
  >
    {children}
  </main>
))

Main.displayName = "Main"

export { Main }
