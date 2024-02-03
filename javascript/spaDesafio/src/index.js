
//maping address
const routes = {
  "/": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/explore": "/pages/explore.html",
  404: "/pages/404.html",
}

//to add click event and prevent to refresh and direct the page
function route(event){
  event = event || window.Event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()
}

function handle() {
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]
  
  console.log(route);
}