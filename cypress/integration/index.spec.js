describe('Index Page', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })
  it('App Launches and can visit the website', function() {
    cy.visit('http://localhost:3000')
  })
  it('Has Programers Name, Title', function() {
    cy.get('.IndexTopPanel')
      .should('be.visible')
      .and('contain', 'Ryan Clark')
      .and('contain', 'Full Stack Developer')
  })
  it(' Has Background Div class'), function () {
    cy.get('.IndexTopPanel-BG')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(107, 142, 35)')
  }
})
