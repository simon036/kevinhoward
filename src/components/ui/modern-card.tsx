import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface ModernCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
}

const ModernCard = forwardRef<HTMLDivElement, ModernCardProps>(
  ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
    const baseClasses = "rounded-xl bg-white transition-all duration-200";
    
    const variants = {
      default: "shadow-sm border border-slate-200",
      elevated: "shadow-lg hover:shadow-xl",
      outlined: "border-2 border-slate-200 hover:border-slate-300"
    };
    
    const paddings = {
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    };
    
    return (
      <div
        className={cn(baseClasses, variants[variant], paddings[padding], className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ModernCard.displayName = "ModernCard";

const ModernCardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mb-4", className)}
      {...props}
    />
  )
);
ModernCardHeader.displayName = "ModernCardHeader";

const ModernCardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl font-semibold text-slate-900 mb-2", className)}
      {...props}
    />
  )
);
ModernCardTitle.displayName = "ModernCardTitle";

const ModernCardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-slate-600 leading-relaxed", className)}
      {...props}
    />
  )
);
ModernCardContent.displayName = "ModernCardContent";

export { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent };