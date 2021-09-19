const {Schema, model} = require('mongoose')
const User = new Schema({ 
  name: [{type: String}],
  email: {  
    type: String, 
    unique: true,
    validate: {
      validator: v => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v),
      message: '{VALUE} is not a valid email address'
    } 
  },
  messages: [{ 
    type: String, 
    created: { 
      type: Date, 
      default: Date.now() 
    },
    minLength: 1, 
    maxLength: 5000,
    required: true, 
  }],

});


module.exports = model('User', User)
