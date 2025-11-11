import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { 
  Calculator, 
  FileText, 
  PieChart, 
  Shield, 
  Building, 
  Users, 
  TrendingUp, 
  Briefcase,
  CreditCard,
  Home,
  GraduationCap,
  Heart,
  Target,
  DollarSign,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react";

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'accent';
}

const iconMap = {
  calculator: Calculator,
  'file-text': FileText,
  'pie-chart': PieChart,
  shield: Shield,
  building: Building,
  users: Users,
  'trending-up': TrendingUp,
  briefcase: Briefcase,
  'credit-card': CreditCard,
  home: Home,
  'graduation-cap': GraduationCap,
  heart: Heart,
  target: Target,
  'dollar-sign': DollarSign,
  'check-circle': CheckCircle,
  phone: Phone,
  mail: Mail,
  'map-pin': MapPin,
  clock: Clock,
};

const ModernIcon = ({ name, size = 'md', variant = 'default', className, ...props }: IconProps) => {
  const IconComponent = iconMap[name as keyof typeof iconMap];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  const baseClasses = "flex items-center justify-center rounded-lg";
  
  const sizes = {
    sm: "w-8 h-8 p-1.5",
    md: "w-12 h-12 p-2.5",
    lg: "w-16 h-16 p-4",
    xl: "w-20 h-20 p-5"
  };
  
  const variants = {
    default: "bg-slate-100 text-slate-600",
    primary: "bg-blue-100 text-blue-800",
    accent: "bg-teal-100 text-teal-700"
  };
  
  const iconSizes = {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40
  };
  
  return (
    <div
      className={cn(baseClasses, sizes[size], variants[variant], className)}
      {...props}
    >
      <IconComponent size={iconSizes[size]} />
    </div>
  );
};

export { ModernIcon };