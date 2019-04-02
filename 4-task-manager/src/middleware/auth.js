const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, 'thisismynewtest')
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
    // we included the user's id on the token
    console.log(token, decoded, user)
    if (!user) {
      throw new Error()
    }
    // give access to the user for the route handler
    // add a property onto request storing the user as a new object property
    // no need for route handler to refetch the user
    req.user = user
    next()
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate.' })
  }
}

module.exports = auth
