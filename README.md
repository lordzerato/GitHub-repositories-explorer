# GitHub Repositories Explorer

A simple GitHub Repositories Explorer built with:

* React
* TypeScript
* Vite
* Chakra UI
* Sass (SCSS)
* TanStack React Query
* Prettier & ESLint

## Features

* Search GitHub users
* View user repositories
* Pagination with clean UI
* API state management using React Query
* Styled with Chakra UI and custom SCSS
* Code linted and formatted using ESLint and Prettier

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/github-repositories-explorer.git
cd github-repositories-explorer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Before running the project, you need to configure a `.env` file with your GitHub **Personal Access Token (PAT)**.

Create a `.env` file in the project root, and add the following:

```env
VITE_AUTH_TOKEN=your_github_pat_here
```

You can generate a **fine-grained PAT** in GitHub settings:
**Settings → Developer settings → Personal access tokens → Fine-grained tokens**

For this project, you only need `read-only` permission for:

* Repository contents
* Metadata

### 4. Run the development server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

## Stack

| Tool / Library       | Purpose                   |
| -------------------- | ------------------------- |
| React                | Frontend framework        |
| TypeScript           | Static typing             |
| Vite                 | Build tool and dev server |
| Chakra UI            | UI component library      |
| Sass (SCSS)          | Styling                   |
| TanStack React Query | Data fetching and caching |
| ESLint               | Code linting              |
| Prettier             | Code formatting           |

## Git Workflow

This project follows a basic Git flow:

* `main`: production branch
* `dev`: development branch
* `feature/*`: feature branches (example: `feature/search-account`)

Typical flow:

1. Develop features in `feature/*` branches.
2. Merge `feature/*` into `dev` for testing.
3. Merge `dev` into `main` when ready to release.

## License

This project is licensed under the MIT License.
