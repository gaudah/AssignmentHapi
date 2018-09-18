var book =  require('./book.js');
var Prod =  require('../Model/product.js');


exports.findAndUpdateProd = (req,h) => {

return Prod.findOne({ "pid": req.payload.pid}).select('sold_qty').exec().then(i => {
if(i!==null)
{
console.log(i)
return Prod
  .findOneAndUpdate(
    {
      "total_qty": 50000, // search query
       "sold_qty" : { $gt:0 , $lte: 50000 }

    },
    {
      $set : { "sold_qty" : i.sold_qty+1 }

    },
    {
      new: true,                       // return updated doc
      runValidators: true              // validate before update
    })
  .exec().then(doc => {

	console.log(doc)
         return book.validCustUpdate(req,h)
  })
  .catch(err => {
     return { err: err };
    })
}
else
{
return {product: "prod is invalid"}

}})

}



