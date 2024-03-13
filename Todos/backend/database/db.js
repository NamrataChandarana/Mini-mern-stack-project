import mongoose from 'mongoose'

export const connectDB = (db) =>{
    mongoose.connect(process.env.MONGODB_LINK,{useNewUrlParser: true,
        useUnifiedTopology: true,})
  .then(() => console.log('Connected!')).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    // process.exit(1); // Exit the process with a failure code
});
}