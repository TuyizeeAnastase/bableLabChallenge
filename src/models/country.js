import mongoose from "mongoose";

export const country = mongoose.model("Country",{
    country_name:String,
    year:String,
    area:Number,
    total_population:Number
})