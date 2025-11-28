import './Icon.css';

const Icon = ({ 
  name, 
  size = 24, 
  color = 'var(--color-cloud-40)',
  className = '' 
}) => {
  // Icon mapping - we'll add more as needed
  const icons = {
    activities: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    plus: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    chevronDown: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };

  return (
    <div className={`icon ${className}`} style={{ color }}>
      {icons[name] || icons.activities}
    </div>
  );
};

export default Icon;
