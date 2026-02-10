# VWO Playwright Test Suite

Comprehensive automated test suite for VWO (Visual Website Optimizer) using [Playwright](https://playwright.dev/). This project implements the Page Object Model (POM) design pattern for maintainability and scalability.

## 🚀 Features

- **Smoke Tests**: Verifies critical paths like Login and Campaign Creation.
- **Functional Tests**: Covers core modules (Testing, Insights, Personalize).
- **Integration Tests**: Validates third-party integrations (e.g., Google Analytics).
- **UI/UX Tests**: Checks visual editor loading and responsive design.
- **API Tests**: Validates backend REST endpoints.
- **Edge Cases**: Handles boundary values, security scenarios, and invalid inputs.

## 📂 Project Structure

```
src/
├── config/         # Configuration files (playwright.config.ts, .env)
├── pages/          # Page Object classes (POM)
├── tests/          # Test spec files
└── utils/          # Helper functions and test data
```

## 🛠️ Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/atulsingh9936/Project4_LocalLLM_Prompt_Template.git
    cd Project4_LocalLLM_Prompt_Template
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # Install Playwright browsers
    npx playwright install
    ```

3.  **Configure Environment:**
    - Rename `src/config/.env.example` to `.env` in the root directory.
    - Update `VWO_USERNAME` and `VWO_PASSWORD` with your credentials.

## 🏃‍♂️ Running Tests

- **Run All Tests:**
    ```bash
    npx playwright test
    ```

- **Run Specific Suite:**
    ```bash
    npx playwright test tests/smoke.spec.ts
    ```

- **Run in UI Mode:**
    ```bash
    npx playwright test --ui
    ```

- **Generate Report:**
    ```bash
    npx playwright show-report
    ```

## 📝 Notes

- **Sensible Defaults**: Selectors and API endpoints marked with `[NEEDS CLARIFICATION]` in the code should be updated with actual values from the VWO application.
- **2FA**: Two-Factor Authentication handling is implemented in `LoginPage.ts` but commented out by default.

## 📄 License

ISC
