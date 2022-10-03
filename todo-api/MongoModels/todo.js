const {Schema, model} = require ('mongoose')

const userSchema = new Schema({
  name: String,
  address: String,
});

 module.export = model('Kitten', userSchema);