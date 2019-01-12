describe('Index Page', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })
  it('App Launches and can visit the website', function() {
    cy.visit('http://localhost:3000')
  })
  it('Should load my name', function() {
    cy.get('.RyanClark')
      .should('contain', 'Ryan Clark')
  })
  it('Should load my job title', function() {
    cy.get('.Profession')
    .should('contain', 'Full Stack Web Developer')
  })
  it('Should load my picture', function() {
    cy.get('.Me')
    .should('exist', 'ME.jpg')
  })
})
