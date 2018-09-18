var Prod =  require('../Model/product.js');

/**
 * List Prods
 */

exports.list = (req, h) => {
	//console.log("get prods")
  return Prod.find({}).exec().then((dog) => {
	//console.log("prod"+dog)
    return { products: dog };

  }).catch((err) => {

    return { err: err };

  });
}

exports.getProdDetails = (req,h) =>{
return Prod.findOne({ "pid" : "aishu12345"}).select('total_qty sold_qty updated_at').exec().then((dog) => {
 return "Booked qty is "+`${dog.sold_qty}`+","+ "Remaining qty is "+`${dog.total_qty - dog.sold_qty}`+","+"Updated_At timing is " + `${dog.updated_at}`

	}).catch((err) => {

    	return { err: err };

  	});

}


exports.findProd = (req,h) =>{
return Prod.findOne({ "pid": req.payload.pid}).select('sold_qty').exec().then((dog) => {
        return { product: dog };
        }).catch((err) => {

        return { err: err };

        });

}





exports.getProdById = (req, h) => {
  return Prod.findOne({"pid":req.params.id}).exec().then((dog) => {
    if(!dog) return { message: 'Prod not Found' };

    return { product: dog };

  }).catch((err) => {

    return { err: err };

  });
}




exports.insertProd = (req, h) => {
 var myData = new Prod(req.payload)

  return myData.save().then((dog) => {

     return { message: "prod inserted successfully", product: dog };

  }).catch((err) => {

    return { err: err };

  });
}

/**
 * Delete Prod by ID
 */

//Update Prod by title
exports.updateProduct = (req,h) => {
return Prod
    .findOneAndUpdate(
      {
        title: req.params.id // search query
      },
      {
        title: 'Laptop' // field:values to update
      },
      {
        new: true, // return updated doc
        runValidators: true // validate before update
      }).exec().then((dog) => {
	 return { product: dog };
        }).catch((err) => {

        return { err: err };

        });
}


exports.deleteProd = (req,h) => {
 return Prod.remove({ title: req.params.id }).exec().then((dog) => {
         return { product: dog };
        }).catch((err) => {

        return { err: err };

        });
}





