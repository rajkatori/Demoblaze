const homepage = 'https://www.demoblaze.com/index.html'
describe('testing demoblaze about us',()=>{
beforeEach(()=>{
    cy.visit(homepage)
})
it('TC-ABOUT-001: Verify that video option is displayed when user click about us icon',()=>{
    cy.get(':nth-child(3) > .nav-link').click().wait(2000)
    cy.get('.vjs-poster').click().wait(2000)
    cy.reload(true)
})

})