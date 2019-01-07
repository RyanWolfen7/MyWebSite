describe('Index Page', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })
  it('App Launches and can visit the website', function() {
    cy.visit('http://localhost:3000')
  })
  it('Has Programers Name, Title, Email, Phone', function() {
    cy.get('.IndexTopPanel')
      .should('be.visible')
      .and( 'contain', 'Ryan Clark')
      .and('contain', 'Phone: +1-210-294-1400')
      .and('contain', 'Email: wolfen7lada@gmail.com')
      .and('contain', 'Full Stack Developer')
  })
})
