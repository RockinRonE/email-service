const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middleswares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'test charges for cred',
      source: req.body.id
    });

    req.user.credits += 5;
    // good to save the result to ensure most up to date user model
    const user = await req.user.save();
    res.send(user);
  });
};
