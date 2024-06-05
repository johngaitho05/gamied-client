export const baseUrl = "https://api.gamied.tech";

export const getUser = () => {
  let user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

export const getAccessToken = () => {
  let tokens = localStorage.getItem("gamiedTokens");
  if (!tokens) return;
  return JSON.parse(tokens).access;
};

export const parseMedia = (url) => {
  if (!url) return;
  return baseUrl + url;
};
