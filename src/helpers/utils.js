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


export const formatTimeClock = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};


export const formatTimeStr = (timeAllowed) => {
    const hours = Math.floor(timeAllowed / 60);
    const minutes = timeAllowed % 60;
    return hours > 0
      ? `${hours} hr${hours > 1 ? "s" : ""} ${
        minutes > 0 ? `${minutes} min` : ""
      }`
      : `${minutes} min`;
};


export const getUserTarget = (user) => {
    if (user.rank === 'Novice'){
        return 2000
    }else if (user.rank === 'Apprentice'){
        return 5000
    }else if (user.rank === 'Hero'){
        return 1000
    }else if (user.rank === 'SuperHero'){
        return 20000
    }else if (user.rank === 'Expert'){
        return 500000
    }else {
        return 100000
    }
}
