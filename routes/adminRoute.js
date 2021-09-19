const {Router} = require('express');

const router = new Router();
const User = require('../modules/User')

router.get('/', async (req, res) => {
  res.send(await User.find())
})

module.exports = router;