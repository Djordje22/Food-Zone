# Food-Zone

A food ordering web app built with React: browse a menu, add meals to a cart,
adjust quantities, and check out with address validation. Cart state is
managed with React Context and `useReducer`; the menu and orders go through a
small, swappable data layer.

**Live:** https://food-zone-9b874.web.app

## Features

- Menu loaded asynchronously with loading and error states
- Cart modal rendered through a portal, with add/remove per item and a running total
- Checkout form with field-level validation (name, street, 5-character postal code, city)
- Order submission with pending, success, and error states
- Animated header cart button and CSS Modules for scoped styling

## Data layer

`src/config.js` picks the backend:

| `REACT_APP_DB_URL` | Menu | Orders |
|---|---|---|
| unset (default) | `public/meals.json` (static) | simulated, logged to the console |
| `https://<project>-default-rtdb.firebaseio.com` | `<url>/meals.json` | `POST <url>/orders.json` |

The app originally talked to a Firebase Realtime Database. If that database is
unavailable the app still works in demo mode, so the deployment never shows a
broken page. To use Firebase again, copy `.env.example` to `.env` and set the
URL.

## Run locally

```bash
npm install
npm start          # http://localhost:3000
npm run build      # production build in build/
```

Requires Node 18 or newer (Create React App 5).

## Deploy

Hosting is on Firebase (`firebase.json` serves the `build/` folder):

```bash
npm run build
npx firebase-tools@latest deploy --only hosting
```

The repo also includes a `.mcp.json` that registers the Firebase MCP server
for Claude Code, scoped to this project.
