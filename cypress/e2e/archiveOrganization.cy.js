/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPOM";
import { addOrganization } from "../page_objects/addOrganizationPOM";
import { archiveOrganization } from "../page_objects/archiveOrganizationPOM";


describe("Archive organization test", () => {

    beforeEach("", () => {
        cy.visit("/");
        loginPage.login(credetials.email, credetials.password);
        cy.url().should("not.include", "/login");
        cy.url().should("include","/my-organizations");
    });

    it("Archive organization", () => {
       
    });

});