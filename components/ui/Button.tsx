// components/ui/Button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "primary" | "secondary" | "ghost" | "whatsapp"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? (Slot as React.ElementType) : "button"
    
    const variants = {
      primary: "bg-gold hover:bg-gold-dark text-white font-semibold rounded-md transition-colors duration-200",
      secondary: "border-2 border-white text-white hover:bg-white hover:text-navy rounded-md transition-all",
      ghost: "border-2 border-gold text-gold hover:bg-gold hover:text-white rounded-md transition-all",
      whatsapp: "bg-whatsapp text-white font-semibold rounded-full flex items-center gap-2 hover:opacity-90"
    }
    
    const sizes = {
      default: variant === "whatsapp" ? "px-6 py-3" : "px-8 py-4",
      sm: "px-4 py-2 text-sm",
      lg: "px-10 py-5 text-lg"
    }

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
