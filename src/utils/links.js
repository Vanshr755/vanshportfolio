// "linkedin.com/in/xyz" likhne par bhi https:// apne aap jud jata hai.
// (Bina https:// ke browser link ko apni hi site ka page samajhta hai.)
export const withProtocol = (url = "") => {
  const u = url.trim();
  if (!u) return "";
  return /^(https?:\/\/|mailto:|tel:)/i.test(u) ? u : `https://${u.replace(/^\/+/, "")}`;
};

// http(s) links naye tab me khulte hain; mailto: same tab me (email app).
export const linkProps = (href) =>
  /^https?:\/\//.test(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
