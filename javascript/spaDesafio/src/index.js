
//maping address
const routes = {
  "/home": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/explore": "/pages/explore.html",
  404: "/pages/404.html",
}


handle()

window.onpopstate = () => handle()
window.route = () => route()