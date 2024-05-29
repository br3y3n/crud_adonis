/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const EmployesController = ()=> import('#controllers/employes_controller')
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('employe', EmployesController)