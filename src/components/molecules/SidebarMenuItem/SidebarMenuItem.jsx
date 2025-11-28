import Icon from '../../atoms/Icon/Icon';
import Counter from '../../atoms/Counter/Counter';
import './SidebarMenuItem.css';

const SidebarMenuItem = ({ 
  label,
  icon = 'activities',
  count,
  isSelected = false,
  isHover = false,
  hasIcon = true,
  onClick,
  className = ''
}) => {
  const itemClass = `sidebar-menu-item ${isSelected ? 'selected' : ''} ${isHover ? 'hover' : ''} ${className}`;
  
  return (
    <button className={itemClass} onClick={onClick}>
      <div className="sidebar-menu-item-content">
        {hasIcon && (
          <Icon 
            name={icon} 
            size={24}
            color={isSelected ? 'var(--color-primary, #6366f1)' : 'var(--color-cloud-40, #b2b0b5)'}
          />
        )}
        <span className="sidebar-menu-item-label">{label}</span>
      </div>
      {count !== undefined && count !== null && (
        <Counter count={count} variant="default" />
      )}
    </button>
  );
};

export default SidebarMenuItem;
