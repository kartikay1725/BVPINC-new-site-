import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-violet-600 active:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-violet-400/40",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-red-600 active:bg-red-700 hover:shadow-lg hover:shadow-red-500/25 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-red-400/40 dark:focus-visible:ring-red-400/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-violet-50 hover:text-violet-900 active:bg-violet-100 hover:shadow-lg hover:shadow-violet-500/20 hover:scale-[1.02] active:scale-[0.98] hover:border-violet-400 dark:bg-slate-800/30 dark:border-slate-600 dark:hover:bg-violet-900/30 dark:hover:text-violet-200 dark:hover:border-violet-500",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-teal-100 hover:text-teal-900 active:bg-teal-200 hover:shadow-lg hover:shadow-teal-500/20 hover:scale-[1.02] active:scale-[0.98] dark:hover:bg-teal-900/30 dark:hover:text-teal-200",
        ghost:
          "hover:bg-violet-50 hover:text-violet-900 active:bg-violet-100 hover:scale-[1.02] active:scale-[0.98] dark:hover:bg-violet-900/20 dark:hover:text-violet-200",
        link: "text-violet-600 underline-offset-4 hover:underline hover:text-teal-600 active:text-violet-700 hover:scale-[1.02] active:scale-[0.98] dark:text-violet-400 dark:hover:text-teal-400",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
