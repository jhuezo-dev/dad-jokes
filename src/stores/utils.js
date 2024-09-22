export function setItems(key, value) {
  const s = JSON.parse(localStorage.getItem("jokes"));
  if (!s) {
    localStorage.setItem("jokes", JSON.stringify({ [key]: value }));
  } else {
    s[key] = value;
    localStorage.setItem("jokes", JSON.stringify(s));
  }
}