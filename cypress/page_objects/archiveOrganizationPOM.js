class ArchiveOrganizaton {
    

    get myOrganization() {
       return cy.get(".vb-content").find(".vs-c-list").eq(1).find(".vs-c-list__btn").eq(0);
    };

    get configurationBtn() {
        return cy.get(".vs-l-project__menu").find("ul.vs-c-list").children().last();
    };

    get archiveBtn() {
        return cy.get(".vs-c-btn").eq(-2);
    }
}

export const archiveOrganization = new ArchiveOrganizaton();