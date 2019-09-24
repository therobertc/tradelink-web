const Route = ({ path, render }) => {
  if (path !== window.location.pathname && path) return null;
  return render();
};

export default Route;
