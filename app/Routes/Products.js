module.exports = (Route) => {

  Route
    .resource('products', 'ProductsController')
    .only(['show', 'index'])
    .middleware(['guest'])

  Route
    .resource('products', 'ProductsController')
    .only(['store', 'update', 'destroy'])
    .middleware(['guest'])
}
