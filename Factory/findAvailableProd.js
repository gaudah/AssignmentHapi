var isValidCustUpdateProd = require('./isValidCustUpdateProd.js')
var Prod =  require('../Model/product.js');

exports.findAvailableProd = (req,h) => {
return Prod.findOne(
    { "total_qty": 50000,
       "sold_qty" : { $gt:0 , $lte: 50000 }},

    {pid: true},

).exec().then(data => {

	if(data && data !== 'null' && data !== 'undefined')
          return isValidCustUpdateProd.isValidCustUpdateProd(req,h)
        else
	  return {products:"Sorry products are not available for sale"}
})
}

