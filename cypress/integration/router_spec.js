describe('Router test', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Change router after click home', () => {
        cy.get('a[name="home"]').
            click();
        cy.url().
            should('eq', `${Cypress.config("baseUrl")}/`);
    });

    it('Change router after form link', () => {
        cy.get('a[name="form"]').
            click();
        cy.url().
            should('eq', `${Cypress.config("baseUrl")}/form`);
    });
});
