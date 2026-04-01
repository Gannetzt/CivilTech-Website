import logo from '../assets/59663358e291026026b733e05a456c1f287e3e58.png';

interface LogoBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LogoBadge({ className = '', size = 'md' }: LogoBadgeProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-12 h-12 p-2',
    lg: 'w-16 h-16 p-3'
  };

  return (
    <div className={`absolute top-4 left-4 z-20 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center group overflow-hidden ${sizeClasses[size]} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <img 
        src={logo} 
        alt="Civiltech Logo" 
        className="w-full h-full object-contain brightness-0 invert opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
      />
    </div>
  );
}
