// components/ui/Badge.tsx
import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "destructive"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  let variantStyles = "bg-primary text-white border-transparent"
  
  if (variant === "secondary") {
    variantStyles = "bg-secondary text-black border-transparent"
  } else if (variant === "outline") {
    variantStyles = "text-primary border-primary"
  } else if (variant === "destructive") {
    variantStyles = "bg-red-500 text-white border-transparent"
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantStyles} ${className || ''}`}
      {...props}
    />
  )
}

export { Badge }
