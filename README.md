# FRONTEND AUTOMATION FOR MOUTS (AMBEV)

End-to-End (E2E) test automation project built with **Cypress**, following the **Page Object Model (POM)** design pattern. It was created for the Mouts TI technical challenge, exercising the [ServeRest](https://serverest.dev/) demo application through both its UI and API.

---

# 🚀 Technologies

* Cypress
* JavaScript
* Node.js
* @faker-js/faker
* Mochawesome Reporter

---

# 📋 Prerequisites

Before running this project, make sure you have the following installed:

* Node.js (v18 or higher recommended)
* npm

Verify your installation:

```bash
node -v
npm -v
```

---

# 📦 Installation

Clone this repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd <repository-folder>
```

Install all project dependencies:

```bash
npm install
```

> **Note:** Running `npm install` automatically installs all required dependencies, including Cypress, Faker, Mochawesome Reporter, and any other packages defined in `package.json`.

---

# 🔑 Environment Variables

This project keeps sensitive/test data (such as the test user password) out of the codebase using a `.env` file, loaded via `dotenv` in `cypress.config.js`.

Before running the tests, create your own `.env` file based on the provided example:

```bash
cp .env.example .env
```

Then fill in the values in `.env`:

| Variable             | Description                                         |
| -------------------- | ---------------------------------------------------- |
| `TEST_USER_PASSWORD` | Password used to create and log in test users        |

> **Note:** `.env` is git-ignored and must never be committed. Only `.env.example` (with placeholder values) is versioned. Without a valid `.env` file, the login and product scenarios will fail, since they depend on `TEST_USER_PASSWORD`.

---

# 🗂️ Project Structure

```text
cypress/
├── e2e/
│   ├── login.spec.cy.js       # Account creation and login scenarios
│   └── product.spec.cy.js     # Product registration and search scenarios
└── support/
    ├── commands.js            # Custom commands (e.g. user creation via API)
    ├── e2e.js                 # Global support file
    └── pageObjects/
        ├── loginPage.js
        ├── homePage.js
        └── productPage.js

.env.example                   # Template for the required environment variables
cypress.config.js              # Cypress config, loads .env via dotenv
```

---

# ▶️ Available Scripts

| Command             | Description                        |
| -------------------- | ----------------------------------- |
| `npm run cy:open`   | Opens Cypress in interactive mode  |
| `npm run cy:run`    | Runs all tests in headless mode    |
| `npm run cy:chrome` | Runs all tests headless using Chrome |

---

# 🧪 Test Scenarios

## Login (`login.spec.cy.js`)

* **Successfully create an account** — fills out the sign-up form with random data (via Faker) and asserts the success message is displayed.
* **Successfully perform a login** — creates a user through the ServeRest API (`cy.createUserApi`) and logs in through the UI, asserting the logout button is visible.

## Product (`product.spec.cy.js`)

* **Successfully register a product** — logs in as an admin user, registers a new product with random data, and asserts it appears in the product list.
* **Successfully find a product by name** — logs in as a regular user and searches for an existing product, asserting the matching result is displayed.
* **No results for a nonexistent product** — searches for a random, non-existent product name and asserts the "no products found" message is displayed.

Test users and products are generated dynamically with `@faker-js/faker`, keeping each run independent and avoiding shared/stale data between executions.

---

# 🧩 Custom Commands

* `cy.createUserApi(name, email, password, administrador)` — creates a user directly through the ServeRest API (`POST /usuarios`), used to set up test preconditions without going through the UI.

---

# ▶️ Running the Tests

Interactive mode:

```bash
npm run cy:open
```

Headless mode:

```bash
npm run cy:run
```

Headless mode using Chrome:

```bash
npm run cy:chrome
```

---

# 📊 Test Reports

This project uses **Mochawesome Reporter** to generate detailed HTML reports after each execution.

Reports are generated in:

```text
cypress/reports/
```

Each report includes:

* Test execution summary
* Passed and failed tests
* Execution time
* Failure screenshots (when available)

---

# 🏗️ Design Pattern

The framework follows the **Page Object Model (POM)** pattern, separating test logic from page interactions.

Benefits include:

* Better code organization
* Easier maintenance
* Improved readability
* Reusable components
* Scalable automation architecture

---

# 💡 Best Practices

* Use stable selectors such as `data-testid`.
* Keep test data separate from test logic.
* Avoid hard-coded waits whenever possible.
* Write independent and isolated test cases.
* Reuse page objects and helper methods.
* Keep tests simple and readable.
