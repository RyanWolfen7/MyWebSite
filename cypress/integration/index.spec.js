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
  it('Should find the link buttons', function() {
    cy.get('.Links')
    .children()
    .should( 'exist', 'Git')
    .should( 'exist', 'LI')
    .should( 'exist', 'FB')
    .should( 'exist', 'YT')
    .should( 'exist', 'HP')
  })
  it('Should redirect you to Github', function() {
    cy.get('.Git').should('have.attr', 'href', 'https://github.com/RyanWolfen7')
  })
  it('Should redirect you to Linked In', function() {
    cy.get('.LI').should('have.attr', 'href', 'https://www.linkedin.com/in/ryan-clark-44b156127/')
  })
  it('Should redirect you to Face Book', function() {
    cy.get('.FB').should('have.attr', 'href', 'https://www.facebook.com/ryan.clark.18400')
  })
  it('Should redirect you to You Tube', function() {
    cy.get('.YT').should('have.attr', 'href', 'https://www.youtube.com/channel/UCH4TK55SqiGyTIzwUnVpfxg')
  })
  it('Should redirect you to Hello Poetry', function() {
    cy.get('.HP').should('have.attr', 'href', 'https://hellopoetry.com/ryan-clark/')
  })
  it('Should click the skills tab and have skills', function() {
    cy.get('.skills .bm-burger-button').click()
    cy.get('.skillsList')
    .should('contain', 'Leadership')
    .should('contain', 'Agile Methodology')
    .should('contain', 'Self Learning')
    .should('contain', 'Test Driven Development')
    .should('contain', 'Object Oriented Design')
    .should('contain', 'Domain Driven Design')
  })
  it('Should click the tech tab and have languages', function() {
    cy.get('.tech .bm-burger-button').click()
    cy.get('.proficient')
      .should('contain', 'Proficient Languages')
    cy.get('.functional')
      .should('contain', 'Language Familiarities')
    cy.get('.stacks')
      .should('contain', 'Stack Familiarities')
  })
  it('should have a projects tab and hyperlinks', function() {
    cy.get('.projects .bm-burger-button').click()
    cy.get('.teamProjects')
      .should('contain', 'Team Projects')
    cy.get('.projects .bm-menu').scrollTo('bottom')
    cy.get('.soloProjects')
      .should('contain', 'Solo Projects')
  })
  it('should have contacts tab and contacts', function() {
    cy.get('.contacts .bm-burger-button').click()
    cy.get('.details')
      .should('contain', 'Phone Number')
      .should('contain', 'Email')
      .should('contain', 'Linked In')
      .should('contain', 'Github')
      .should('contain', 'Youtube')
      .should('contain', 'Hello Poetry')
  })
})
