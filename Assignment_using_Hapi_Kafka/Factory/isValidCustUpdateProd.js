
var findAndUpdateProd =  require('./findAndUpdateProd.js');
var Cust =  require('../Model/customer.js');

exports.isValidCustUpdateProd = (req,h) => {
return Cust.findOne(
    // query
    {cid:req.payload.cid,isBooked:true},

    {cid: true},

).exec().then(data => {

        if(data && data !== 'null' && data !== 'undefined')
          return {customer: "isBooked is already true so can't allow same cust for sale"}//res.send("isBooked is already true so can't allow same cust for sale")
        else
        {

return Cust.findOne(
    // query
    {cid:req.payload.cid,isBooked:false},

    {cid: true},

        ).exec().then(data => {

	if(data && data !== 'null' && data !== 'undefined')
           return findAndUpdateProd.findAndUpdateProd(req,h)
        else
               {
		console.log("data"+data)
                return {customer:"Invalid cid entered..No cid exist in database"}
		}

  })
  .catch(err => {
     return { err: err };
    })
}

})
}


