import { mount } from '@cypress/react';
import { MoviesList } from './MoviesList';
import movies from '../../api/movies.json';

describe('MoviesList component', () => {
  it('should render a \'MovieCard\' per each movie', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    mount(<MoviesList movies={movies} />);

    cy.getByDataCy('card')
      .should('have.length', movies.length);
  });
});
