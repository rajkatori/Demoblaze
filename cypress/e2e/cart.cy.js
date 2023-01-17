const homepage = 'https://www.demoblaze.com/index.html'
describe('testing demoblaze about us',()=>{
beforeEach(()=>{
    cy.visit(homepage)
})

it('TC-CART-002: Verify that user can click the cart icon and after clicking it should direct to a new page.',()=>{
    cy.get('#cartur').click()//.wait(3000)
    cy.get('.col-lg-1 > .btn').click().wait(3000)
     cy.get('.form-control').each($el=>{
        console.log($el)
        cy.wrap($el).type("raj")
    })
})

})
