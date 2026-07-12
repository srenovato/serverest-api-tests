# MOUTS AUTOMATION FRONTEND

A modern End-to-End (E2E) test automation framework built with **Cypress**, following the **Page Object Model (POM)** design pattern. This project was created to demonstrate best practices for UI automation, clean architecture, reusable components, and maintainable test suites.

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

# ▶️ Available Scripts

| Command                            | Description                       |
| ---------------------------------- | --------------------------------- |
| `npm run cy:open`                  | Opens Cypress in interactive mode |
| `npm run cy:run`                   | Runs all tests in headless mode   |
| `npx cypress open`                 | Opens Cypress Test Runner         |
| `npx cypress run`                  | Runs all tests in headless mode   |
| `npx cypress run --browser chrome` | Runs tests using Google Chrome    |

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

Run using Chrome:

```bash
npx cypress run --browser chrome
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


# 💡 Best Practices

* Use stable selectors such as `data-testid`.
* Keep test data separate from test logic.
* Avoid hard-coded waits whenever possible.
* Write independent and isolated test cases.
* Reuse page objects and helper methods.
* Keep tests simple and readable.
