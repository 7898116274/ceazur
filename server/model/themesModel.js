const mongoose = require('mongoose');

const ThemesSchema = new mongoose.Schema({
      title: {
            type: String,
            required: true,
            enum: ['Mountain', 'Beach', 'Safari']
      },
      description: {
            type: String,
            trim: true
      },

      isActive: {
            type: Boolean,
            default: true
      },
      updated: Date,
      created: {
            type: Date,
            default: Date.now
      }
});

module.exports = mongoose.model('Themes', ThemesSchema);