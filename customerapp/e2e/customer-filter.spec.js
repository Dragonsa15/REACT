describe("filter customers E2E", () => {
    it("filter customers by search", () => {
        cy.visit("http://localhost:3000");
        cy.get('input[placeholder="search by name"]').type('Geller').get('.row').then(rows => {
            expect(rows.length).to.eq(2);
        })
    });
});