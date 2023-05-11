const blogs = [
  {
    title: "first blog",
    author: "first author",
    url: "example.com",
  },
  {
    title: "second blog",
    author: "second author",
    url: "example.com",
  },
  {
    title: "third blog",
    author: "third author",
    url: "example.com",
  },
];

describe("BlogDetails app", () => {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3001/api/testing/reset");
    cy.createUser({ username: "usman", password: "12345" });
    cy.visit("http://localhost:3000");
  });
  it("shows login form", function () {
    cy.contains("login");
  });
  describe("login", function () {
    beforeEach(() => {
      cy.contains("login").click();
    });
    it("succeeds with correct credentials", function () {
      cy.get("#username").type("usman");
      cy.get("#password").type("12345");
      cy.get("#login-btn").click();
      cy.contains("usman logged in");
    });
    it("fails with invalid credentials", function () {
      cy.get("#username").type("usman");
      cy.get("#password").type("123");
      cy.get("#login-btn").click();
      cy.should("not.contain", "usman logged in");
      cy.get(".error").should("contain", "incorrect username or password");
    });
  });
  describe("When logged in", function () {
    beforeEach(function () {
      cy.login({ username: "usman", password: "12345" });
    });

    it("A blog can be created", function () {
      cy.contains("create new").click();
      cy.get("#title").type("test title");
      cy.get("#author").type("test author");
      cy.get("#url").type("example.com");
      cy.get("#create-btn").click();
      cy.contains("test title by test author");
    });
    it("A blog can be deleted", () => {
      cy.createBlog(blogs[0]);
      cy.contains("first blog by first author").parent().as("blog");
      cy.get("@blog").contains("remove").click();
      cy.on("window:confirm", () => true);
      cy.contains("first blog by first author").should("not.exist");
    });
    describe("remove button", () => {
      beforeEach(() => {
        cy.createBlog(blogs[0]);
      });
      it("shows if the blog owner is logged in", () => {
        cy.contains("first blog by first author").parent().as("blog");
        cy.get("@blog").contains("remove").should("exist");
      });
      it("does not show if blog owner is not logged in", () => {
        const randomUser = { username: "notusman", password: "12345" };
        cy.createUser(randomUser);
        cy.login(randomUser);
        cy.contains("first blog by first author").parent().as("blog");
        cy.get("@blog").contains("remove").should("not.exist");
      });
    });
    describe("blogs are sorted based on the number of likes", () => {
      beforeEach(() => {
        blogs.forEach((blog) => cy.createBlog(blog));
        cy.likeBlog(`${blogs[0].title} by ${blogs[0].author}`);
        cy.likeBlog(`${blogs[1].title} by ${blogs[1].author}`);
        cy.likeBlog(`${blogs[1].title} by ${blogs[1].author}`);
      });
      it.only("blog 'second blog by second author' should appear first", () => {
        cy.get(".blog")
          .eq(0)
          .should("contain", `${blogs[1].title} by ${blogs[1].author}`);
        cy.get(".blog")
          .eq(1)
          .should("contain", `${blogs[0].title} by ${blogs[0].author}`);
        cy.get(".blog")
          .eq(2)
          .should("contain", `${blogs[2].title} by ${blogs[2].author}`);
      });
    });
    describe("several blogs exist", function () {
      beforeEach(() => {
        blogs.forEach((blog) => cy.createBlog(blog));
      });
      it("one of those can be liked", function () {
        cy.contains("third blog by third author").parent().as("blog");
        cy.get("@blog").find("button:first").click();
        cy.get("@blog").find(".like-btn").click();
        cy.get("@blog").find(".likes").should("contain", "1");
      });
    });
  });
});
