import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-all duration-200 font-medium",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-hover",
        secondary: "bg-secondary text-white hover:bg-secondary-hover",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        text: "text-primary hover:underline bg-transparent",
      },
      size: {
        small: "h-9 px-4 text-sm",
        normal: "h-11 px-6",
        medium: "h-12 px-8",
        large: "h-14 px-10 text-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      withIcon: {
        true: "inline-flex items-center gap-2",
        false: "",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "normal",
      fullWidth: false,
      withIcon: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, 'disabled'> {
  asChild?: boolean
  icon?: React.ReactNode
}

const StratejiButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, disabled, icon, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
            withIcon: !!icon,
            className
          }),
          disabled && "opacity-50 cursor-not-allowed pointer-events-none"
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
        {icon && icon}
      </button>
    )
  }
)
StratejiButton.displayName = "StratejiButton"

export { StratejiButton, buttonVariants } 