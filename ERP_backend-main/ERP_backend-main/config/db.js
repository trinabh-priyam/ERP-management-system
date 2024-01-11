import mongoose from "mongoose";

export const connectToDB = async() => {
  await mongoose
    .connect(
      "mongodb+srv://sovonsutar:123@erp.lgeholv.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB Atlas:", error);
    });
};
