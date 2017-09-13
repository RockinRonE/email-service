// set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // if in production then return prod keys
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
