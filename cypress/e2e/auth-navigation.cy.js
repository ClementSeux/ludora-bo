describe('Auth and navigation flows', () => {
  it('shows role selection and navigates to teacher login', () => {
    cy.visit('/');

    cy.contains('Portail Connexion').should('be.visible');
    cy.contains('Je suis un enseignant').click();

    cy.location('pathname').should('eq', '/login/teacher');
    cy.contains('Login enseignant').should('be.visible');
  });

  it('redirects unauthenticated users from protected route', () => {
    cy.visit('/home/overview');

    cy.location('pathname').should('eq', '/');
    cy.contains('Portail Connexion').should('be.visible');
  });

  it('logs in with mocked API and reaches dashboard', () => {
    cy.intercept('POST', '**/api/auth/login', {
      statusCode: 200,
      body: {
        token: 'fake-jwt-token',
        user: {
          id: 'teacher-1',
          email: 'teacher@ludora.com',
          role: { name: 'teacher' },
          personalInfo: { firstName: 'Demo' },
        },
      },
    }).as('loginRequest');

    cy.intercept('GET', '**/api/classes', {
      statusCode: 200,
      body: [{ id: 'class-1', name: 'CM1-A' }],
    }).as('classesRequest');

    cy.intercept('GET', '**/api/classes/*/students', {
      statusCode: 200,
      body: [{ id: 'student-1' }, { id: 'student-2' }],
    }).as('studentsRequest');

    cy.intercept('GET', '**/api/activities', {
      statusCode: 200,
      body: [{ id: 'activity-1', name: 'Addition' }],
    }).as('activitiesRequest');

    cy.intercept('GET', '**/api/themes', {
      statusCode: 200,
      body: [{ id: 'theme-1', name: 'Mathématiques' }],
    }).as('themesRequest');

    cy.visit('/login/teacher');

    cy.get('input[type="email"]').type('teacher@ludora.com');
    cy.get('input[type="password"]').type('Password123!');
    cy.contains('Se connecter').click();

    cy.wait('@loginRequest');
    cy.wait('@classesRequest');
    cy.wait('@activitiesRequest');
    cy.wait('@themesRequest');
    cy.wait('@studentsRequest');

    cy.location('pathname').should('eq', '/home/overview');
    cy.contains("Vue d'ensemble").should('be.visible');
  });
});
