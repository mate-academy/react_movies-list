import React from 'react';
import { mount } from '@cypress/react';
import { App } from './App';

describe('App', () => {
  beforeEach(() => {
    // eslint-disable-next-line react/jsx-filename-extension
    mount(<App />);
  });

  it('should render all the movies', () => {
    cy.getByDataCy('Movie').should('have.length', 5);
  });

  it('should render a sidebar', () => {
    cy.getByDataCy('Sidebar')
      .should('have.text', 'Sidebar will be here');
  });
});
