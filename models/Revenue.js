const mongoose = require('mongoose');

const RevenueSchema = new mongoose.Schema({
     month:{type: String, required:true},
     revenue:{type:Number,required:true}
});

mongoose.models= {};
const Revenue = mongoose.model("Revenue", RevenueSchema);
export default Revenue;


// {month: 'Jan', revenue: 2000 },