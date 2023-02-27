/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPOM";
import { addOrganization } from "../page_objects/addOrganizationPOM";
import { archiveOrganization } from "../page_objects/archiveOrganizationPOM";

const credetials = {
    email: "vivifytest@gmail.com",
    password: "12345678"
};

describe("Archive organization test", () => {

    beforeEach("Visit app and log in", () => {
        cy.visit("/");
        loginPage.login(credetials.email, credetials.password);
        cy.url().should("not.include", "/login");
        cy.url().should("include","/my-organizations");
    });

    it("Archive organization", () => {

    archiveOrganization.myOrganization.click().then(() => {
         cy.get(".vs-c-modal--features-button").find(".vs-c-btn").click();
     });

     archiveOrganization.configurationBtn.click();
     archiveOrganization.archiveBtn.click().then(() => {
        cy.get("button[name='save-btn']").click()
     });

    });

});