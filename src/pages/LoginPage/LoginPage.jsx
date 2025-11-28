import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LudoraLogo from '../../components/atoms/LudoraLogo/LudoraLogo';
import RoleCard from '../../components/molecules/RoleCard/RoleCard';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    // Navigate to the appropriate login form based on role
    if (role === 'teacher') {
      navigate('/login/teacher');
    } else if (role === 'parent') {
      navigate('/login/parent');
    }
  };

  // Teacher icon SVG
  const TeacherIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 20C31.16 20 24 27.16 24 36C24 44.84 31.16 52 40 52C48.84 52 56 44.84 56 36C56 27.16 48.84 20 40 20ZM40 28C43.31 28 46 30.69 46 34C46 37.31 43.31 40 40 40C36.69 40 34 37.31 34 34C34 30.69 36.69 28 40 28ZM40 60C32 60 24 64 24 68V72H56V68C56 64 48 60 40 60Z" fill="#f7f7f8"/>
      <path d="M38 16L26 22V28L38 34L50 28V22L38 16Z" fill="#f7f7f8"/>
    </svg>
  );

  // Parent icon SVG
  const ParentIcon = () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 20C31.16 20 24 27.16 24 36C24 44.84 31.16 52 40 52C48.84 52 56 44.84 56 36C56 27.16 48.84 20 40 20ZM40 28C43.31 28 46 30.69 46 34C46 37.31 43.31 40 40 40C36.69 40 34 37.31 34 34C34 30.69 36.69 28 40 28ZM40 60C32 60 24 64 24 68V72H56V68C56 64 48 60 40 60Z" fill="#f7f7f8"/>
    </svg>
  );

  return (
    <div className="login-page">
      <LudoraLogo />
      
      <div className="login-page__container">
        <div className="login-page__content">
          <div className="login-page__header">
            <h1 className="login-page__title">Portail Connexion</h1>
            <div className="login-page__badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect width="16" height="16" rx="3" fill="rgba(165, 163, 168, 0.3)"/>
              </svg>
              <span className="login-page__badge-text">Ecole de Gratte Ciel #0711</span>
            </div>
            <div className="login-page__divider"></div>
          </div>

          <div className="login-page__roles">
            <div className="login-page__cards">
              <RoleCard 
                title="Je suis un enseignant"
                icon={<TeacherIcon />}
                onClick={() => handleRoleSelect('teacher')}
              />
              <RoleCard 
                title="Je suis un parent"
                icon={<ParentIcon />}
                onClick={() => handleRoleSelect('parent')}
              />
            </div>

            <a href="/register" className="login-page__register-link">
              Vous n'avez pas encore de compte ?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
