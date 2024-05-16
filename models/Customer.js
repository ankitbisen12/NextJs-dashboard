const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    image_url: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

CustomerSchema.virtual('id').get(function () {
  return this._id;
});

CustomerSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Customer =
  mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);
export default Customer;

// Customer = {
//     id: string;
//     name: string;
//     email: string;
//     image_url: string;
//   };


