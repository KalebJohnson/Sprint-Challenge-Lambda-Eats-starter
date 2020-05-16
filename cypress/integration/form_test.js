describe('input test', function () {
    beforeEach(function () {
        cy.visit("http://localhost:3000/Form");
    });

    it("testing typing input", () => {

        cy.get('input[name="name"]')
        .type("test")
        .should("have.value", "test")
    })

    it("testing toppings selection", () => {


        cy.get('input[name="pepperoni"]')
        .check().should("be.checked");

        cy.get('input[name="mushrooms"]')
        .check().should("be.checked");

        cy.get('input[name="salami"]')
        .check().should("be.checked");
        
        cy.get('input[name="spinach"]')
        .check().should("be.checked");

    })

    it("testing submit", () => {
        cy.get('form').submit()
    })
})