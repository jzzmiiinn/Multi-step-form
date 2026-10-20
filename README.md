# Multi-Step Form

A responsive multi-step subscription form built with React, TypeScript, and Tailwind CSS as part of a [Frontend Mentor](https://www.frontendmentor.io/) challenge.

The application guides users through entering personal information, choosing a subscription plan, selecting add-ons, and reviewing their order before confirmation. It includes form validation and local storage persistence to preserve progress across page refreshes.

## Features

- **Multi-step navigation:** Navigate between personal information, plan selection, add-ons, and summary.
- **Form validation:** Validate name, email address, and phone number before proceeding.
- **Subscription plans:** Select a plan and switch between monthly and yearly billing.
- **Optional add-ons:** Choose additional services for your subscription.
- **Order summary:** Review selections and return to the plan selection step to make changes.
- **Local storage:** Save and restore form data and the current step after refreshing the page.
- **Confirmation screen:** Display a thank-you message after confirming the order.
- **Responsive design:** Adapt the interface to mobile and desktop screen sizes.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- HTML5
- CSS3
- Browser Local Storage

## Project Structure

```text
Multi-step-form/
├── design/                 # Challenge design references
├── public/
│   ├── fonts/              # Ubuntu font files
│   ├── bg-sidebar-desktop.svg
│   ├── bg-sidebar-mobile.svg
│   ├── favicon-32x32.png
│   ├── icon-advanced.svg
│   ├── icon-arcade.svg
│   ├── icon-checkmark.svg
│   ├── icon-pro.svg
│   └── icon-thank-you.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FormLayout.tsx
│   │   ├── NavigationButtons.tsx
│   │   └── Sidebar.tsx
│   ├── data/
│   │   ├── addOns.ts
│   │   └── plans.ts
│   ├── steps/
│   │   ├── AddOns.tsx
│   │   ├── PersonalInfo.tsx
│   │   ├── SelectPlan.tsx
│   │   ├── Summary.tsx
│   │   └── Thankyou.tsx
│   ├── types/
│   │   ├── form.ts
│   │   └── plan.ts
│   ├── utils/
│   │   └── validation.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jzzmiiinn/Multi-step-form.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Multi-step-form
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open the local development URL shown in your terminal.

## What I Learned

- Building reusable React components with TypeScript.
- Managing shared state across multiple form steps.
- Implementing controlled inputs and custom validation.
- Using TypeScript interfaces to define data structures and component props.
- Persisting and restoring application state with localStorage.
- Organizing a React application into components, data, types, and utility modules.
- Creating responsive layouts with Tailwind CSS.

## Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io/) for the challenge and design resources.

## Author

**Yasmin Ali**

- GitHub: [@jzzmiiinn](https://github.com/jzzmiiinn)

---

Built with React, TypeScript, and Tailwind CSS as part of my frontend development journey.
