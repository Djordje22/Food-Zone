// Backend configuration.
//
// The app was originally wired to a Firebase Realtime Database. If that
// database is unavailable (deactivated, not yet created, or you simply want to
// run the app standalone), leave REACT_APP_DB_URL unset and the app falls back
// to the bundled menu in public/meals.json and simulates order submission.
//
// To use Firebase again, create a .env file with:
//   REACT_APP_DB_URL=https://<your-project>-default-rtdb.firebaseio.com

const rawUrl = (process.env.REACT_APP_DB_URL || '').trim().replace(/\/+$/, '');

export const DB_URL = rawUrl || null;
export const HAS_BACKEND = DB_URL !== null;

export const MEALS_URL = HAS_BACKEND
  ? `${DB_URL}/meals.json`
  : `${process.env.PUBLIC_URL || ''}/meals.json`;

export const ORDERS_URL = HAS_BACKEND ? `${DB_URL}/orders.json` : null;
