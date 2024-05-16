const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema(
  {
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    status:{type:String,required:true},
    amount: { type: Number, required: true },
    date: { type: String, required: true }
  },
  { timestamps: true },
);

InvoiceSchema.virtual('id').get(function () {
  return this._id;
});

InvoiceSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Invoice =
  mongoose.models.Invoice || mongoose.model('Invoice', InvoiceSchema);
export default Invoice;

// Invoice = {
//   customer_id: customers[0].id,
//   amount: 15795,
//   status: 'pending',
//   date: '2022-12-06',
// }

// type
// Invoice = {
//   id: string;
//   customer_id: string;
//   amount: number;
//   date: string;
//   // In TypeScript, this is called a string union type.
//   // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
//   status: 'pending' | 'paid';
// };
