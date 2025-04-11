
import * as React from "react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: number
    max?: number
    color?: string
    showValue?: boolean
    size?: "sm" | "md" | "lg"
  }
>(({ className, value, max = 100, color, showValue = false, size = "md", ...props }, ref) => {
  const percentage = ((value || 0) / max) * 100;
  
  const sizeClasses = {
    sm: "h-1",
    md: "h-1.5",
    lg: "h-2"
  };
  
  return (
    <div className="flex items-center space-x-2 w-full">
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-full bg-secondary/30",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "h-full w-full flex-1 transition-all duration-300 ease-out rounded-full",
            color ? `bg-${color}` : "bg-accent"
          )}
          style={{
            transform: `translateX(-${100 - percentage}%)`,
          }}
        />
      </div>
      {showValue && (
        <div className="text-xs font-medium text-muted-foreground min-w-[24px] text-right">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  )
})
Progress.displayName = "Progress"

export { Progress }
