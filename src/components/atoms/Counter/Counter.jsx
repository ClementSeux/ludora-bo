import './Counter.css';

const Counter = ({ 
  count = 0, 
  variant = 'default',
  className = '' 
}) => {
  const displayCount = count > 99 ? '99+' : String(count).padStart(2, '0');
  
  return (
    <div className={`counter counter-${variant} ${className}`}>
      <span className="counter-text">{displayCount}</span>
    </div>
  );
};

export default Counter;
