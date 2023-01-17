


const homepage = 'https://www.demoblaze.com/index.html'		
describe('homepage test cases ', () => {
  beforeEach(()=>{
    cy.visit(homepage)
  //   cy.viewport(1366,768)
  })

  it('TC-HOME-005:Verify that user can click the phones button under the categories and there should be 7 items',()=>{
    cy.get('div.list-group > :nth-child(2)').click().wait(3000)
    cy.get('div.card.h-100').should('have.length',7)
  })  


  it('TC-HOME-001:Verify that user can browse the hompage and see 9 items as the product list', () => {
    cy.get('div.card.h-100').should('have.length',9).wait(2000).each(el=>{
      cy.wrap(el).find('div.card-block')
      cy.wrap(el).find('div.card-block > h4')
      cy.wrap(el).find('div.card-block > h5')
      cy.wrap(el).find('div.card-block > p')
      cy.get('p#article.card-text')
      cy.get('.active > .d-block')
    })
  });


  it('TC-HOME-003:verify that home carousal part is working.',()=>{
    cy.get('.carousel-control-prev-icon').click().wait(3000)
    cy.get('.carousel-control-prev-icon').click()
  });

  it('TC-HOME-002:Verify that all the buttons under Categories tab is working and contains THREE different items ',()=>{
    cy.get('div.list-group > :nth-child(1)').click().wait(2000)
    cy.get('div.list-group > :nth-child(2)').click().wait(2000)
    cy.get('div.list-group > :nth-child(3)').click().wait(2000)
    cy.get('div.list-group > :nth-child(4)').click().wait(2000)
  })
  })


  

