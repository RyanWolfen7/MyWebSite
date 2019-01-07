describe('Index Page', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })
  it('App Launches and can visit the website', function() {
    cy.visit('http://localhost:3000')
  })
  it('Has Programers Name, Title, Email, Phone', function() {
    cy.get('.IndexTopPanel')
      .contains('Ryan Clark')
      .contains('Phone: +1-210-294-1400')
      .contains('Email: wolfen7lada@gmail.com')
      .contains('Full Stack Developer')
  })
})
