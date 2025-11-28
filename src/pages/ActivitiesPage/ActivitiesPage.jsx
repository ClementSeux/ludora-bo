import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/atoms/Button/Button';
import SideDropMenu from '../../components/organisms/SideDropMenu/SideDropMenu';
import axiosInstance from '../../services/authService';
import './ActivitiesPage.css';

const ActivitiesPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [themes, setThemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [stats, setStats] = useState({
    activities: 0,
    themes: 0
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [activitiesRes, themesRes] = await Promise.all([
        axiosInstance.get('/activities'),
        axiosInstance.get('/themes')
      ]);

      console.log('Activities response:', activitiesRes.data);
      console.log('Themes response:', themesRes.data);

      // Support paginated shape: { activities: [...], themes: [...] }
      const activitiesData = Array.isArray(activitiesRes.data)
        ? activitiesRes.data
        : (Array.isArray(activitiesRes.data?.activities) ? activitiesRes.data.activities : []);
      const themesData = Array.isArray(themesRes.data)
        ? themesRes.data
        : (Array.isArray(themesRes.data?.themes) ? themesRes.data.themes : []);

      console.log('Activities array (parsed):', activitiesData);
      console.log('Themes array (parsed):', themesData);

      setActivities(activitiesData);
      setThemes(themesData);
      setStats({
        activities: activitiesData.length,
        themes: themesData.length
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      // Set empty arrays on error
      setActivities([]);
      setThemes([]);
      setStats({
        activities: 0,
        themes: 0
      });
    } finally {
      setLoading(false);
    }
  };

  const handleThemeClick = (themeId) => {
    setSelectedTheme(themeId === selectedTheme ? null : themeId);
  };

  const filteredActivities = selectedTheme
    ? activities.filter(activity => activity.themeId === selectedTheme)
    : activities;

  const activitiesMenuItems = [
    { 
      id: 1, 
      label: 'Toutes les activités', 
      count: stats.activities, 
      isSelected: !selectedTheme 
    },
    { 
      id: 2, 
      label: 'Thèmes', 
      count: stats.themes, 
      isSelected: false 
    },
  ];

  if (loading) {
    return (
      <div className="activities-page">
        <div className="activities-loading">
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="activities-page">
      <div className="activities-sidebar">
        <SideDropMenu
          title="Activités"
          items={activitiesMenuItems}
          isOpen={true}
        />
        
        <div className="activities-themes-list">
          <h3 className="activities-themes-title">Filtrer par thème</h3>
          {themes.map(theme => (
            <button
              key={theme.id}
              className={`activities-theme-item ${selectedTheme === theme.id ? 'activities-theme-item--active' : ''}`}
              onClick={() => handleThemeClick(theme.id)}
            >
              <span className="activities-theme-name">{theme.name}</span>
              <span className="activities-theme-count">
                {activities.filter(a => a.themeId === theme.id).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <main className="activities-main">
        <header className="activities-header">
          <div className="activities-header-left">
            <button 
              className="activities-back-button"
              onClick={() => navigate('/home')}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/>
              </svg>
              Retour au tableau de bord
            </button>
            <h1 className="activities-header-title">Activités pédagogiques</h1>
            <div className="activities-breadcrumb">
              <span>École de Gratte Ciel #0711</span>
              <span className="activities-breadcrumb-separator">›</span>
              <span>Activités</span>
            </div>
          </div>
          <div className="activities-header-right">
            <span className="activities-header-user">
              {user?.personalInfo?.firstName || user?.email}
            </span>
            <Button onClick={logout} variant="secondary" size="small">
              Déconnexion
            </Button>
          </div>
        </header>

        <div className="activities-content">
          <div className="activities-toolbar">
            <div className="activities-toolbar-left">
              <h2 className="activities-section-title">
                {selectedTheme 
                  ? `Activités - ${themes.find(t => t.id === selectedTheme)?.name}`
                  : 'Toutes les activités'
                }
              </h2>
              <p className="activities-section-subtitle">
                {filteredActivities.length} activité(s) disponible(s)
              </p>
            </div>
            <Button variant="primary" size="small">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7H9V1C9 0.4 8.6 0 8 0Z"/>
              </svg>
              Nouvelle activité
            </Button>
          </div>

          {filteredActivities.length === 0 ? (
            <div className="activities-empty">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="rgba(255, 255, 255, 0.05)"/>
                <path d="M32 16V48M16 32H48" stroke="#a5a3a8" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <h3>Aucune activité trouvée</h3>
              <p>Commencez par créer votre première activité pédagogique</p>
              <Button variant="primary">
                Créer une activité
              </Button>
            </div>
          ) : (
            <div className="activities-grid">
              {filteredActivities.map(activity => {
                const theme = themes.find(t => t.id === activity.themeId);
                return (
                  <div key={activity.id} className="activities-card">
                    <div className="activities-card-header">
                      <div className="activities-card-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                          <path d="M2 17L12 22L22 17V11L12 16L2 11V17Z"/>
                        </svg>
                      </div>
                      {theme && (
                        <span className="activities-card-theme">{theme.name}</span>
                      )}
                    </div>
                    <h3 className="activities-card-title">{activity.name}</h3>
                    <p className="activities-card-description">
                      {activity.description || 'Aucune description disponible'}
                    </p>
                    <div className="activities-card-footer">
                      <span className="activities-card-meta">
                        Niveau: {activity.level || 'N/A'}
                      </span>
                      <button className="activities-card-action">
                        Voir détails →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ActivitiesPage;
