export const CONTENT_API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_CONTENT_API_URL
    : "http://localhost:3000";
