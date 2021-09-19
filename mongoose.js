const {connect} = require('mongoose')

async function connectMongoose() {
  try {
      await connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log('Connected Database Successfully')
  } catch (error) {
      console.log(error)
  }
}

module.exports = connectMongoose