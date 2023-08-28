describe("delete customer E2E", () => {
    it("delete customer by button click", () => {
        cy.visit("http://localhost:3000");
        cy.get('button').eq(2).click().get('.row').then(rows => {
            expect(rows.length).to.eq(5);
        })
    });
});

// cy.get("#btn")