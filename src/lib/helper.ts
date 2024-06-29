export const generateSlug = (title:string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[\s]+/g, "-") // Replace spaces with -
      .replace(/[^a-z0-9-]/g, ""); // Remove all non-alphanumeric characters except for -
  
  };