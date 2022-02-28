describe('User Flow View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });
  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/');
  });

  it('should see a title', () => {
    cy.get('.app-title')
    .contains('BorkStop')
    .should('be.visible')
  })

  it('should see a tagline', () => {
    cy.get('h2.title-colors')
    .contains('Your dog\'s one stop shop for toys and treats!')
    .should('be.visible')
  })


  it('should see items available by item, type, price and number available', () => {
    cy.get('.item-container > :nth-child(1)')
    .should('be.visible')
  }) 

  it('should see a form', () => {
    cy.get('form > :nth-child(1)')
    .should('be.visible')
  })

  it('should be able to add an item by name', () => {
    cy.get('[name="name"]')
    .type('Greenies')
    .should('be.visible')
  })

  it('should be able to add an item by type', () => {
    cy.get('[name="type"]')
    .type('treat')
    .should('be.visible')
  })

  it('should be able to add an item by price', () => {
    cy.get('[name="price"]')
    .type('5.00')
    .should('be.visible')
  })

  it('should be able to add an item by availability', () => {
    cy.get('[name="numberAvailable"]')
    .type('20')
    .should('be.visible')
  })

  it('should be able to submit the form by clicking the submit button', () => {
    cy.get('button')
    .should('be.visible')
    .click()
    .get('.item-container')
    .children('div')
    .should('have.length', 6)
  })
});



// Add some tests. The should cover:
// - What should be displayed on the page when the user first visits
// - When data is typed into the form, the value is reflected in the form input
// - The flow of adding a new item to the shop inventory