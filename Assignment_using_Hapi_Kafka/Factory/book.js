var Prod_Fun =  require('./prod.js');
var Cust =  require('../Model/customer.js');

var Prod =  require('../Model/product.js');

exports.validCustUpdate = (req,h) => {

 return Cust.update( {$and:[{"cid":req.payload.cid},{"isBooked":false}]},{ $set: { isBooked: true }})
  .exec().then((dog) => {
 return Prod_Fun.getProdDetails(req,h)
        }).catch((err) => {
        return { err: err };

        });
}





