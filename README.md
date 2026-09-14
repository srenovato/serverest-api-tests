# MOUTS (AMBEV) TEST AUTOMATION SUITE

Test automation suite built for the Mouts TI technical challenge, exercising [ServeRest](https://serverest.dev/) — a demo e-commerce application — through both its **API** and its **UI**. The suite is split into two independent Cypress projects living side by side in this monorepo:

```text
.
├── backend/    → API test automation (Cypress + cy.request)
└── frontend/   → E2E UI test automation (Cypress + Page Object Model)
```

Each project has its own dependencies, config, and test runner, and can be installed/run independently.

---

# 📂 Projects

| Project | Scope | Docs |
| ------- | ----- | ---- |
| [`backend/`](backend/README.md) | Full CRUD API coverage for the `Usuários` resource (`POST` / `GET` / `PUT` / `DELETE /usuarios`), including negative and validation scenarios. | [backend/README.md](backend/README.md) |
| [`frontend/`](frontend/README.md) | UI E2E flows for account creation, login, and product registration/search, built with the Page Object Model pattern. | [frontend/README.md](frontend/README.md) |

---

# 🚀 Tech Stack

* Cypress
* JavaScript / Node.js
* Faker (`@faker-js/faker`)
* Mochawesome Reporter

---

# 📋 Prerequisites

* Node.js 18+ (recommended)
* npm

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

Install dependencies for both projects:

```bash
npm run install:all
```

Or install just one of them:

```bash
npm install --prefix backend
npm install --prefix frontend
```

> The `frontend` project also requires a local `.env` file — see [frontend/README.md](frontend/README.md#-environment-variables) for setup.

---

# 🧪 Running the Tests

From the repository root:

```bash
npm run test:backend   # runs the API suite
npm run test:frontend  # runs the E2E UI suite
npm run test:all       # runs both, back-to-back
```

Or from within each project folder — see each project's own README for interactive mode, browser selection, and running individual specs:

```bash
cd backend && npm run cy:open
cd frontend && npm run cy:open
```

---

# 📊 Reports

Each project generates its own **Mochawesome HTML report** after execution, under its own `cypress/reports/` folder (`backend/cypress/reports/` and `frontend/cypress/reports/`).

---

# 💡 Best Practices

* Keep each project's dependencies, config, and reports isolated from the other.
* Generate dynamic test data with Faker instead of hardcoding payloads.
* Write independent, isolated test cases and clean up created data after each run.
* Validate both HTTP status codes/response bodies (API) and visible UI feedback (E2E).
* Never commit `.env` files or log sensitive values in plain text.
