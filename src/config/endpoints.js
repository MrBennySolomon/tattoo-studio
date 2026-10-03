// כל כתובות השרת החיצוניות במקום אחד.
// ניתן להחליף בלי לגעת בקוד: צרו קובץ .env לפי .env.example
// הערכים שמופיעים כאן כברירת מחדל הם של פרויקט המוסך המקורי - החליפו אותם!
const env = import.meta.env;

// רשימת פניות הלקוחות (MockAPI) - טופס יצירת קשר + מסך הניהול
export const API_URL =
  env.VITE_LEADS_API_URL ||
  "https://6aae754a606bd915d110d395.mockapi.io/api/clients";

// שרת ההתחברות (Login)
export const AUTH_API =
  env.VITE_AUTH_API_URL || "https://users-server-seven.vercel.app/api";

// Firebase Realtime Database להעלאת תמונות (בלי סלאש בסוף)
export const DB_URL =
  env.VITE_IMAGES_DB_URL ||
  "https://users-be4a5-default-rtdb.europe-west1.firebasedatabase.app";

// שרת שמירת siteConfig.js לריפו ב-GitHub
export const SAVE_URL =
  env.VITE_SAVE_URL || "https://business-server-five.vercel.app/upload";

// שם הריפו ב-GitHub שאליו עורך האתר שומר את siteConfig.js.
// חשוב: זה כבר לא "garage" כדי לא לדרוס בטעות את אתר המוסך.
export const GITHUB_REPO_NAME = env.VITE_GITHUB_REPO || "tattoo-studio";
