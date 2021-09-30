'use strict';

it('can check the server is running', () => {
  cy.visit('/');
});

it('adds a name', () => {
  cy.visit('/');
  cy.get('form').find("input[name='message']").type('Blah blah');
  cy.get('form').find("input[name='name']").type('Anna');
  cy.contains('Send').click();
  cy.contains('Anna');
});

it('can delete a messsage', () => {
  cy.get('form[action="/deletefrit"]').find('button').click();
  cy.contains('Alex').should('not.exist');
});

it('posts annoymousely if no name provided', () => {
  cy.get('form').find("input[name='message']").type('New Frit');
  cy.get('form').find("input[name='name']");
  cy.contains('Send').click();
  cy.contains('annonymouse 🐭');
});
