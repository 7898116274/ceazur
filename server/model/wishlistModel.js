const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
      user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userDetails',
            required: true
      },
      products: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products'
      }],
      created: {
            type: Date,
            default: Date.now
      }
});

module.exports = mongoose.model('Wishlist', WishlistSchema);
