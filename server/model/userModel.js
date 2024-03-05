const mongoose = require('mongoose')

const userDetailsSchema = new mongoose.Schema({
      userEmail: {
            type: String,
            lowercase: true,
      },
      userName: {
            type: String,
      },
      userContact: {
            type: String,
            required: true,
            unique: true,

      },
      role: {
            type: String,
            required: true,
            default: "CUSTOMER"
      },
      addresses: [
            {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "addresses",
            },
      ],
      paymentInformation: [
            {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "payment_information",
            },
      ],
      ratings: [
            {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "ratings",
            },
      ],
      reviews: [
            {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "reviews",
            },
      ],
      createdAt: {
            type: Date,
            default: Date.now(),
      },
      updateDate: {
            type: Date,
            default: Date.now
      },
});

const userCollection = new mongoose.model('userDetails', userDetailsSchema)

module.exports = userCollection