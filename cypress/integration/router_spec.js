describe('Router test', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Change router after click link first', () => {
        cy.get('a[name="child1"]').
            click();
        cy.url().
            should('eq', `${Cypress.config("baseUrl")}/child/1`);
    });

    it('Change router after click link sec', () => {
        cy.get('a[name="child2"]').
            click();
        cy.url().
            should('eq', `${Cypress.config("baseUrl")}/child/2`);
    });
});
