// SMOK=DRAGON(POLISH)
app made for children 3-8 years old, with a focus on food and gastronomy. The app is designed to be interactive and educational, with a focus on introducing children to different types of foods.
# React

# React

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

//- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
//- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# React + Vite Project Structure

This project is organized with a typical React + Vite setup, including components, assets, data, utilities, and configuration files. Below is an overview of the folder structure:
smok_gastronomy_ex/
├── node_modules/                 # Installed dependencies
├── public/                       # Static assets accessible directly
├── src/                          # Source files
│   ├── assets/                   # Asset files like images, fonts, etc.
│   ├── components/               # React components
│   │   ├── CategorySelection.jsx
│   │   ├── CookingStage.jsx
│   │   ├── IngredientCard.jsx
│   │   └── PlayerSelection.jsx
│   ├── data/                     # Data files (if any)
│   ├── utils/                    # Utility functions
│   │   └── logger.js
│   ├── App.css                   # Main CSS styles
│   ├── App.jsx                   # Root React component
│   ├── index.css                 # Entry CSS
│   ├── //index.js//-----                 # Entry point for React
│   └── main.jsx                  # Main React rendering
├── .gitignore                    # Files to ignore in Git
├── eslintrc.config.js            # ESLint configuration
├── index.html                    # Main HTML template
├── package-lock.json             # Locked dependencies
├── package.json                  # Project dependencies & scripts
├── postcss.config.js             # PostCSS configuration (if used)
├── README.md                     # Project overview
├── tailwind.config.js            # Tailwind CSS configuration (if used)
└── vite.config.js                # Vite configuration


//  ## Summary of Key Files

- **`vite.config.js`**: Configuration for Vite bundler.//N/A
- **`.eslintrc.js`**: ESLint rules for code quality.
- **`index.html`**: Main HTML template.
- **`src/`**: Source folder containing React components, assets, and styles.
- **`components/`**: Reusable React components.
- **`assets/`**: Static assets like images.
- **`utils/`**: Utility functions such as logger.
- **`App.jsx`**: Main React component.
- **`main.jsx`**: React entry point.
- **`package.json`**: Dependencies and scripts.

---

## How to Use

1. **Install dependencies**:
```bash
npm install
2.npm start

smok_gastronomy_explorer/
├── public/
│   ├── images/
│   ├── pwa-manifest.json//N/A
│   └── service-worker.js//N/A
├── src/
│   ├── components/
│   │   ├── IngredientCard.jsx
│   │   └── CookingStage.jsx
│   ├── data/
│   │   └── ingredients.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── tailwind.config.js    # ← Tailwind configured here
├── vite.config.js//N/A
└── documentation.txt
