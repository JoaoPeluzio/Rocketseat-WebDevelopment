
//maping address
const routes = {
  "/home": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/explore": "/pages/explore.html",
  404: "/pages/404.html",
}

//to add click event and prevent to refresh and direct the page
function route(event){
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()
}

function handle() {
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]

  fetch(route)
  .then(data => data.text())
  .then(html => {
    document.querySelector('#app').innerHTML = html
  })

}

handle()

window.onpopstate = () => handle()
window.route = () => route()