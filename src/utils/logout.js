export const logout = () => {
  localStorage.removeItem("futureMeLoggedIn");
  window.location.href = "/auth";
};