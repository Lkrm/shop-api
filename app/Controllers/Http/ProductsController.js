'use strict'

class ProductsController {
  show({ params }){
    const { id } = params;
    return 'Single' + id
  }

  index({ params }){
    const { limit, offset, sortBy, order } = params;
    return 'List'
  }

  destroy({ params }){
    const { id } = params;
    return 'Delete'
  }

  update({ request, params }){
    const { idcd } = params;
    const data = request.only(['title', 'description', 'options', 'status'])
    return 'Update'
  }

  store({ request }){
    const data = request.only(['title', 'description', 'options', 'status'])

    return 'Create'
  }
}

module.exports = ProductsController
