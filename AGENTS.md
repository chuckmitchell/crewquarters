# Agent & Environment Guidelines: CrewQuarters

This file documents critical environment constraints, runtime commands, and architectural context for Antigravity agents working in this repository.

---

## 1. Environment & Node.js Runtime

- **Node Requirement:** Next.js 16 requires Node.js 18+ or 20+.
- **System Gotcha:** The default `/usr/local/bin/node` on this system is an ancient binary (**v12.14.0**). Running `npm` or `node` directly without path interception will fail with syntax errors (`SyntaxError: Unexpected token '?'`).
- **Tool Manager (`mise`):**
  - Node 22 is installed and pinned via [`mise.toml`](file:///Users/charles/projects/antigravity/crewquarters/mise.toml) (`node = "22"`).
  - **Always prefix build and runner commands with `mise exec --`**:
    - Dev server: `mise exec -- npm run dev`
    - Build: `mise exec -- npm run build`
    - Lint: `mise exec -- npm run lint`
    - Package install: `mise exec -- npm install <package>`

---

## 2. In-Agent Browser / Subagent Automation

- The automated Antigravity Browser subagent cannot download Playwright driver binaries due to sandbox network isolation.
- **Do not spend tool turns attempting automated browser clicks.**
- When verifying the UI, run the dev server (`mise exec -- npm run dev`) and direct the user to test locally at `http://localhost:3000`.

---

## 3. Technology Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI Library:** HeroUI (`@heroui/react` 2.8.5)
- **Styling:** Tailwind CSS v4 (`tailwind.config.ts`, `globals.css`)
- **Icons & Animation:** `lucide-react`, `framer-motion`
- **Date Handling:** `@internationalized/date`

---

## 4. Key Files & Architecture

- **`app/page.tsx`**: Landing / Hero page.
- **`app/projects/new/page.tsx`**: Wizard container for project setup.
- **`components/create-project/`**:
  - `project-basics.tsx`: Step 1 (The Slate - Name & Notes)
  - `roster-input.tsx`: Step 2 (Cast & Crew - Smart Paste)
  - `schedule-input.tsx`: Step 3 (The Schedule - Shooting dates & -1/+1 buffer window)
  - `inventory-input.tsx`: Step 4 (Housing blocks)
  - `step-indicator.tsx`: Visual wizard breadcrumb
- **Domain & Reference Documentation (`reference/`)**:
  - [`reference/product_backlog.md`](file:///Users/charles/projects/antigravity/crewquarters/reference/product_backlog.md): Product backlog & stories.
  - [`reference/ui_elements.md`](file:///Users/charles/projects/antigravity/crewquarters/reference/ui_elements.md): Complete UI element specifications.
  - [`reference/data_model_er.md`](file:///Users/charles/projects/antigravity/crewquarters/reference/data_model_er.md) & [`reference/data_models.md`](file:///Users/charles/projects/antigravity/crewquarters/reference/data_models.md): Entity models & relationships.
  - [`reference/seed_data_roles.md`](file:///Users/charles/projects/antigravity/crewquarters/reference/seed_data_roles.md): Production departments & hierarchy priority rankings (1–5).
  - [`reference/Spreadsheet_instructions.txt`](file:///Users/charles/projects/antigravity/crewquarters/reference/Spreadsheet_instructions.txt): Original production coordinator notes on crew accommodations.
