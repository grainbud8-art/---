import { motion } from 'motion/react';
import { ICONS } from './constants';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-emerald-50 shadow-soft h-20">
      <div className="flex justify-between items-center w-full px-6 h-full max-w-7xl mx-auto">
        <button 
          aria-label="Menu" 
          className="w-touch-target h-touch-target flex items-center justify-start text-primary active:scale-95 transition-transform"
        >
          <ICONS.MEDICAL size={32} />
        </button>
        
        <h1 className="text-2xl font-black text-primary tracking-tight">
          康健守护
        </h1>
        
        <button 
          aria-label="AI Assistant" 
          className="w-touch-target h-touch-target flex items-center justify-end text-primary active:scale-95 transition-transform"
        >
          <ICONS.AI size={32} />
        </button>
      </div>
    </header>
  );
}

interface ActionBtnProps {
  icon: keyof typeof ICONS;
  label: string;
  variant?: 'default' | 'primary' | 'error';
}

export function ActionButton({ icon, label, variant = 'default' }: ActionBtnProps) {
  const Icon = ICONS[icon];
  
  const variantStyles = {
    default: 'bg-white text-on-surface shadow-soft',
    primary: 'bg-white text-on-surface shadow-soft', // In the UI, the circle inside is primary
    error: 'bg-error text-white shadow-soft'
  };

  const circleStyles = {
    default: 'bg-secondary-container text-primary',
    primary: 'bg-primary-container text-white',
    error: 'bg-error-container text-error'
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex flex-col items-center justify-center p-6 rounded-card transition-colors min-h-[140px] ${variantStyles[variant]}`}
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${circleStyles[variant]}`}>
        <Icon size={32} />
      </div>
      <span className="text-[18px] font-bold">{label}</span>
    </motion.button>
  );
}

export function ReminderCard({ icon, title, subtitle, time }: { icon: keyof typeof ICONS, title: string, subtitle: string, time: string }) {
  const Icon = ICONS[icon];
  return (
    <div className="bg-white p-6 rounded-card shadow-soft flex items-center gap-6 min-h-[100px]">
      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
        <Icon size={32} className="text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-[18px] font-bold text-on-surface">{title}</h3>
        <p className="text-[18px] text-on-surface-variant/70">{subtitle}</p>
      </div>
      <span className="text-2xl text-primary font-black">{time}</span>
    </div>
  );
}

export function HealthDataCard({ 
  type, 
  icon, 
  value, 
  unit, 
  status, 
  borderColor 
}: { 
  type: string, 
  icon: keyof typeof ICONS, 
  value: string, 
  unit?: string, 
  status?: string,
  borderColor: string
}) {
  const Icon = ICONS[icon];
  return (
    <div className={`bg-white p-6 rounded-card shadow-soft min-h-[120px] flex flex-col justify-between border-l-8 ${borderColor}`}>
      <div className="flex items-center gap-4 mb-2">
        <Icon size={32} className="text-secondary" />
        <h3 className="text-[18px] font-bold text-on-surface-variant">{type}</h3>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-black text-on-surface">{value}</span>
        {unit && <span className="text-xl text-on-surface-variant">{unit}</span>}
        {status && (
          <span className="ml-auto text-[18px] font-bold text-primary bg-primary-container/10 px-4 py-2 rounded-full">
            {status}
          </span>
        )}
      </div>
    </div>
  );
}

export function BottomNav() {
  const navItems = [
    { icon: 'NAV_HOME', label: '首页', active: true },
    { icon: 'NAV_MEDS', label: '医药' },
    { icon: 'NAV_DOCS', label: '文档' },
    { icon: 'NAV_ME', label: '我的' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-24 px-4 pb-safe bg-white rounded-t-[24px] shadow-nav">
      {navItems.map((item, idx) => {
        const Icon = ICONS[item.icon as keyof typeof ICONS];
        return (
          <button 
            key={idx}
            className={`flex flex-col items-center justify-center px-6 py-2 rounded-2xl transition-colors ${
              item.active ? 'bg-primary/10 text-primary' : 'text-on-surface-variant'
            }`}
          >
            <Icon size={24} className="mb-1" />
            <span className="text-[14px] font-bold">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed right-6 bottom-32 flex flex-col gap-4 z-[60]">
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-full bg-primary-container text-white shadow-lg flex items-center justify-center"
      >
        <ICONS.AI size={32} />
      </motion.button>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-full bg-primary-container text-white shadow-lg flex items-center justify-center"
      >
        <ICONS.NOTIFICATIONS size={32} />
      </motion.button>
    </div>
  );
}
