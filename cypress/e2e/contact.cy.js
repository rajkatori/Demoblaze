const homepage = 'https://www.demoblaze.com/index.html'		
describe('homepage test cases ', () => {
beforeEach(()=>{
    cy.visit(homepage)
})

it('TC-CONTACT-001: Verify that user can click the contact  in  nav-link and 3 input box should be available. ',()=>{
    cy.get(':nth-child(2) > .nav-link').click().wait(2000)
    cy.get('.form-control').each(el=>{
        console.log(el)
        cy.wrap(el).type("raj")
    })
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
})
})