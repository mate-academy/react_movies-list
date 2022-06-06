import { mount } from '@cypress/react';
import { App } from './App';
import moviesFromServer from './api/movies.json';

describe('App', () => {
  it(`should pass the 'moviesFromServer'
    to the 'MoviesList' as a prop`, () => {
    // eslint-disable-next-line react/jsx-filename-extension
    mount(<App movies={moviesFromServer} />);

    cy.getByDataCy('card')
      .should('have.length', moviesFromServer.length);
  });

  it('should contain initial sidebar', () => {
    mount(<App movies={moviesFromServer} />);

    cy.get('.sidebar')
      .should('contain', 'Sidebar will be here');
  });
});
