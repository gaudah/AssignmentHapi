
const controller = require('../Controller/controllerHapi.js')

module.exports = [
    { method: 'GET', path: '/getProds', handler: controller.getProds},
    { method: 'GET', path: '/prodById/{id}', handler: controller.prodById },
    { method: 'POST', path: '/prodInsert', handler: controller.prodInsert },
    { method: 'PUT', path: '/updateProd/{id}', handler: controller.updateProd },
    { method: 'DELETE', path: '/deleteProd/{id}', handler: controller.deleteProd },
    { method: 'GET', path: '/getCusts', handler: controller.getCusts },
    { method: 'GET', path: '/custById/{id}', handler: controller.custById },
    { method: 'POST', path: '/custInsert', handler: controller.custInsert },

    { method: 'PUT', path: '/updateCust/{id}', handler: controller.updateCust },
    { method: 'DELETE', path: '/deleteCust/{id}', handler: controller.deleteCust },
    { method: 'GET', path: '/GetAllUpdatedProd', handler: controller.GetAllUpdatedProd },
    { method: 'POST', path: '/bookCustProd/', handler: controller.bookCustProd },

];




