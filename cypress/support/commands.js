// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("createUser", ({ username, password }) => {
  cy.request("POST", "http://localhost:3001/api/users", { username, password });
});

Cypress.Commands.add("login", ({ username, password }) => {
  cy.request("POST", "http://localhost:3001/api/login", {
    username,
    password,
  }).then((response) => {
    window.localStorage.setItem("user", JSON.stringify(response.body));
    cy.visit("http://localhost:3000");
  });
});

Cypress.Commands.add("createBlog", (blog) => {
  cy.request({
    url: "http://localhost:3001/api/blogs",
    method: "POST",
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
    },
    body: blog,
  }).then(() => {
    cy.visit("http://localhost:3000");
  });
});

Cypress.Commands.add("likeBlog", (title) => {
  cy.contains(title).parent().as("blog");
  cy.get("@blog")
    .find(".toggle-btn")
    .then(($button) => {
      if ($button.text() === "show") {
        cy.contains("button", "show").click();
      }
    });
  cy.get("@blog").find(".like-btn").click();
});
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
