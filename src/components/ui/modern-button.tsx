import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ModernButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const ModernButton = forwardRef<HTMLButtonElement, ModernButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-blue-800 text-white hover:bg-blue-900 active:bg-blue-950 shadow-sm hover:shadow-md",
      secondary: "bg-teal-700 text-white hover:bg-teal-800 active:bg-teal-900 shadow-sm hover:shadow-md",
      outline: "border-2 border-blue-800 text-blue-800 hover:bg-blue-50 active:bg-blue-100",
      ghost: "text-slate-700 hover:bg-slate-100 active:bg-slate-200"
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };
    
    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

ModernButton.displayName = "ModernButton";

export { ModernButton };