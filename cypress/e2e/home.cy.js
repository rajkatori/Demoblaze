const homepage = 'https://www.demoblaze.com/index.html'		
describe('homepage test cases ', () => {
  it('TC-HOME-001:Verify that user can browse the hompage and see 9 items as the product list', () => {
    cy.visit(homepage)
  })
})