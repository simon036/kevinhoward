import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'muted' | 'dark';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', spacing = 'lg', children, ...props }, ref) => {
    const baseClasses = "relative";
    
    const variants = {
      default: "bg-white",
      muted: "bg-slate-50",
      dark: "bg-slate-900 text-white"
    };
    
    const spacings = {
      sm: "py-8",
      md: "py-12",
      lg: "py-16",
      xl: "py-24"
    };
    
    return (
      <section
        className={cn(baseClasses, variants[variant], spacings[spacing], className)}
        ref={ref}
        {...props}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

const SectionHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-center mb-12", className)}
      {...props}
    />
  )
);
SectionHeader.displayName = "SectionHeader";

const SectionTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn("text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading", className)}
      {...props}
    />
  )
);
SectionTitle.displayName = "SectionTitle";

const SectionSubtitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-lg text-slate-600 max-w-2xl mx-auto", className)}
      {...props}
    />
  )
);
SectionSubtitle.displayName = "SectionSubtitle";

export { Section, SectionHeader, SectionTitle, SectionSubtitle };