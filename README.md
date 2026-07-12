# MOUTS_AUTOMATION_BACKEND

A lightweight and scalable API test automation framework built with **Cypress** and **JavaScript**. This project demonstrates API testing best practices, reusable test data generation, clean project organization, and automated reporting.

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
npx cypress run --spec "cypress/e2e/users/createUser.cy.js"
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

Stores reusable assertions and response validations.

```text
support/validations/
```

---

# ✅ Current Test Coverage

The framework currently automates the following API scenarios:

### Users

* Create a new user
* Prevent duplicate user creation
* Delete an existing user

---

# 💡 Best Practices

* Generate dynamic test data using Faker.
* Keep API requests separate from test logic.
* Reuse factories instead of hardcoding payloads.
* Write independent and isolated test cases.
* Use descriptive test names.
* Validate both HTTP status codes and response bodies.
