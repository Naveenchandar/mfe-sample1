import("./bootstrap").then(({ mount }) => {
  const element = document.getElementById('dev-todos-root');
  mount(element, { routingType: 'browser' });
}).catch(error => {
  alert("todos not found", error.message)
})

export { }