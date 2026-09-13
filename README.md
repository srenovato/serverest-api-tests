# BACKEND AUTOMATION FOR MOUTS (AMBEV)

A lightweight and scalable API test automation framework built with **Cypress** and **JavaScript**. This project demonstrates API testing best practices, reusable test data generation, clean project organization, and automated reporting.

---

# 🎯 API Under Test

This framework targets [ServeRest](https://serverest.dev/) (`https://serverest.dev`), a public sandbox REST API used for practicing test automation. ServeRest also exposes **Login**, **Produtos** and **Carrinhos** endpoints, but this suite intentionally scopes its coverage to the full CRUD lifecycle of the **Usuários** (users) resource. The API sits on a shared, publicly writable database, which shapes some of the design decisions below (test data isolation, cleanup, no destructive assumptions about pre-existing records).

---

# 🚀 Tech Stack

* Cypress
* JavaScript
* Node.js
* Faker (`@faker-js/faker`)
* Mochawesome Reporter

---

# 📋 Prerequisites

Before running this project, make sure you have installed:

* Node.js 18+ (recommended)
* npm

Check your installation:

```bash
node -v
npm -v
```

---

# 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

Install all dependencies:

```bash
npm install
```

This command installs all required packages, including:

* Cypress
* Faker
* Mochawesome Reporter

---

# ▶️ Available Scripts

| Command           | Description                             |
| ----------------- | --------------------------------------- |
| `npm run cy:open` | Opens Cypress in interactive mode       |
| `npm run cy:run`  | Executes all API tests in headless mode |

---

# 🧪 Running the Tests

Interactive mode:

```bash
npm run cy:open
```

Headless mode:

```bash
npm run cy:run
```

Run a specific spec:

```bash
npx cypress run --spec "cypress/e2e/users/user.cy.js"
```

---

# 📊 Reports

This framework is configured to generate **Mochawesome HTML reports** after test execution.

Reports are generated under:

```text
cypress/reports/
```

The reports include:

* Test execution summary
* Passed and failed test cases
* Execution duration
* Failure details
* Screenshots (when available)

---

# 🏗️ Framework Architecture

The project separates responsibilities into dedicated layers:

### API Layer

Responsible for HTTP requests.

```text
support/api/
```

### Factories

Responsible for generating test data using Faker.

```text
support/factories/
```

### Helpers

Contains reusable utility functions, such as logging and common helpers.

```text
support/helpers/
```

### Validations

Stores reusable assertions and response validations, keeping status/body checks out of the test files and consistent across scenarios that share the same expected response.

```text
support/validations/
```

---

# 🔁 Test Isolation & Cleanup

Because tests run against a shared public environment, every spec tracks the ids of the users it creates and removes them in an `afterEach` hook, regardless of whether the test passed or failed. This keeps runs independent and prevents leftover data from accumulating in the environment or affecting other tests (e.g. list/filter scenarios).

---

# ✅ Current Test Coverage

The framework currently automates the following API scenarios:

### Users (`POST` / `GET` / `PUT` / `DELETE /usuarios`)

**Create**
* Create a new user
* Prevent duplicate user creation
* Return validation errors when required fields are missing

**Read**
* Retrieve a user by id
* Return an error when retrieving a non-existent user
* List users filtered by email

**Update**
* Update an existing user
* Prevent updating a user to an email already in use by another user

**Delete**
* Delete an existing user
* Return a no-op message when deleting a non-existent id

---

# 💡 Best Practices

* Generate dynamic test data using Faker.
* Keep API requests separate from test logic.
* Reuse factories instead of hardcoding payloads.
* Write independent and isolated test cases.
* Clean up created data after every test run.
* Use descriptive test names.
* Validate both HTTP status codes and response bodies.
* Avoid logging sensitive values (e.g. passwords) in plain text, even for test data.
