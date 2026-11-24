# NABTA

**A bilingual academic website for NABTA, a bio-based soil conditioner designed for sandy soils.**

NABTA presents the project's overview, soil-related research areas, formulation ingredients, package options, references, supervisor, and team. The website is available in English and Arabic with right-to-left (RTL) layout support.

## Features

- 🌐 Bilingual interface (English / Arabic) with full RTL support
- 🔬 Soil and research themes overview
- 📚 Selected scientific publications
- 🗂️ Project resources
- 👥 Supervisor and team information
- 🌱 Product ingredient and package information

## Research topics

- Soil water retention
- Soil structure and aggregation
- Organic matter and nutrient enrichment
- Microbial biopolymer soil conditioning

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended) and npm

### Install and run locally

```bash
git clone https://github.com/Elwasify/NABTA.git
cd NABTA
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

### Available scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local development server   |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Built with

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [React Router](https://reactrouter.com/)
- [styled-components](https://styled-components.com/)
- [Iconify](https://iconify.design/) icons

## Project structure

```
src/
  components/  Page sections and shared UI components
  context/     Language state and language provider
  data/        Research topics, publications, and project details
  i18n/        English and Arabic translations
  assets/      Images used by the website
public/        Static files
```

## Adding or editing content

- Research topics, publications, and project details live in `src/data/`.
- Translations for both languages live in `src/i18n/`. When you add new text, add it in **both** English and Arabic.

## Deployment

The site is deployed on [Vercel](https://vercel.com/). To deploy your own copy, import the repository into Vercel and use the Vite defaults:

- **Build command:** `npm run build`
- **Output directory:** `dist`

## License

No license has been specified yet. Add a `LICENSE` file to make the terms of use clear.