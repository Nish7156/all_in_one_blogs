export const checkEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://all-in-one-blogs.vercel.app";
  return base_url;
};
