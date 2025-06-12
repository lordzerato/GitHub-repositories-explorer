# RepEx - GitHub Repositories Explorer

A lightweight and responsive GitHub repositories explorer with modern UI, powered by Chakra UI and React Query.

![Project Status](https://img.shields.io/badge/status-in%20development-yellow)

✨ Responsive and accessible  
🌙 Dark mode supported  
📱 Mobile-friendly UI 

## Features

- ✅ Search GitHub users
- ✅ View user repositories
- ✅ API state management (cache) using React Query
- ✅ Dark / Light mode toggle
- ⏳ Error handling (In Progress)
- ⏳ Responsive layout (In Progress)
- 🛠️ Search GitHub Repository (Planned)
- 🛠️ Trending repositories (Planned)
- 🛠️ Loading skeleton (Planned)
- 🛠️ Sort & filter repositories (Planned)
- 🛠️ Repository detail view (Planned)

## Screenshots

| Search UI | Repositories List |
|-----------|-------------------|
| ![Search](./screenshots/search.png) | ![Repo List](./screenshots/repos.png) |

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

Use file `.env.example` or Create a `.env` file in the project root, and add the following:

```env
VITE_AUTH_TOKEN=your_github_pat_here
```

> You can generate a **fine-grained PAT** in GitHub settings:<br>
> **Settings → Developer settings → Personal access tokens → Fine-grained tokens**
> 
> For this project, you only need `read-only` permission for:
> * Repository contents
> * Metadata

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

### This project follows a basic Git flow:

* `main`: production branch
* `dev`: development branch
* `feature/*`: feature branches (example: `feature/search-account`)
* `fix/*`: bugfix branches (e.g. `fix/fetch-error`)

### Typical workflow:

1. **New feature** → create from `dev`:
   ```bash
   git checkout dev
   git checkout -b feature/your-feature-name
   ```
2. **Bug fix** → also branch from `dev`:
   ```bash
   git checkout dev
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes locally, push to origin, and open a Pull Request (PR) into `dev`.
4. After review and testing, merge `dev` into `main` for production release

### Naming convention:

* Use kebab-case for branch names: `feature/add-filter`, `fix/loading-spinner`.
* Keep commits atomic and meaningful.

## License

This project is licensed under the MIT License.
