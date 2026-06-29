## Basic Greeting 
- Always start your answer with Hey Zarif!  

## Component Design Guidelines

- Prefer small, reusable, and focused components over large monolithic components.
- When a component grows beyond a reasonable size, refactor it into smaller sub-components.
- Extract repeated UI patterns, logic, hooks, and utilities into separate reusable modules.
- Each React component should ideally have a single responsibility.
- Avoid putting large JSX blocks inside one component; split complex sections into meaningful child components.
- Keep components readable and maintainable over clever or compact code.
- Before adding new code, check whether existing components can be reused or extended.
- Prefer composition of smaller components instead of adding more conditional logic to existing components.
- Create separate files for components that have their own purpose or logic.
- Keep business logic separate from presentation whenever practical.

## Refactoring Rules

- If editing an existing large component:
  - First look for natural boundaries where it can be split.
  - Extract repeated sections into components.
  - Extract complex state/logic into hooks.
  - Do not increase component complexity unnecessarily.
