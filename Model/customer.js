var mongoose = require('mongoose')
Schema = mongoose.Schema
var prod = require('./product')

var CustomerSchema = new Schema({
  cid: {type: String, required: true},
  firstName: String,
  lastName: String,
  company: String,
  connectInfo: {
    tel: [Number],
    email: [String],
    address: {
      city: String,
      street: String,
      houseNumber: String
    }
  },
  /// / One to many relationship
  product: {type: String, ref: prod},
  isBooked:{type:Boolean, default:false}
})


CustomerSchema.methods.validPassword = function( pwd ) {
    return ( this.cid === pwd );
};


module.exports = mongoose.model('Customer', CustomerSchema)
