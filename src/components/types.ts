// types.ts

/* App-wide Types */
export interface DarkModeProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
  }
  
  /* Navbar Component */
  export interface NavbarProps extends DarkModeProps {
    // If you need additional props
  }
  
  export interface NavItem {
    path: string;
    section?: string;
    label: string;
    icon?: React.ReactNode;
  }
  
  /* Hero Component */
  export interface Slide {
    id: number;
    title: string;
    description: string;
    image: string;
    ctaPrimary?: CTA;
    ctaSecondary?: CTA;
  }
  
  export interface CTA {
    text: string;
    path: string;
    section?: string;
  }
  
  /* Features Component */
  export interface Feature {
    id: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
  }
  
  /* Pricing Component */
  export interface Plan {
    id: string;
    name: string;
    price: string;
    period?: string;
    features: string[];
    isPopular?: boolean;
    cta: string;
    highlight?: string;
  }
  
  export type BillingCycle = 'monthly' | 'yearly';
  
  /* Contact Component */
  export interface FormData {
    name: string;
    email: string;
    message: string;
    phone?: string;
  }
  
  export interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
    phone?: string;
  }
  
  /* News Ticker Component */
  export interface NewsItem {
    id: number;
    content: string;
    link?: string;
    urgency?: 'low' | 'medium' | 'high';
  }
  
  export interface NewsTickerProps extends Partial<DarkModeProps> {
    items?: NewsItem[];
    speed?: number; // milliseconds between items
  }
  
  /* Footer Component */
  export interface FooterColumn {
    title: string;
    links: FooterLink[];
  }
  
  export interface FooterLink {
    text: string;
    url: string;
    external?: boolean;
  }
  
  /* API Response Types */
  export interface ApiResponse<T> {
    data?: T;
    error?: string;
    success: boolean;
  }
  
  /* Theme Types */
  export type ColorTheme = 'light' | 'dark' | 'system';
  
  export interface ThemeContextType {
    theme: ColorTheme;
    setTheme: (theme: ColorTheme) => void;
    isDarkMode: boolean;
  }
  
  /* Utility Types */
  export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
  
  export type Nullable<T> = T | null;
  
  /* Component Props with Children */
  export interface ChildrenProps {
    children: React.ReactNode;
    className?: string;
  }
  
  /* Button Component */
  export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
  }
  
  /* Navigation Types */
  export interface NavigationContextType {
    navigateToSection: (path: string, sectionId?: string) => void;
    currentPath: string;
    currentSection?: string;
  }
  
  /* Form Types */
  export interface FormField {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    validation?: (value: string) => string | undefined;
  }
  
  /* Responsive Design */
  export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';