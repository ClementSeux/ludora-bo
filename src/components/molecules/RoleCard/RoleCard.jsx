import React from 'react';
import './RoleCard.css';

const RoleCard = ({ title, icon, onClick }) => {
  return (
    <div className="role-card" onClick={onClick}>
      <h3 className="role-card__title">{title}</h3>
      <div className="role-card__image">
        <div className="role-card__icon">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default RoleCard;
