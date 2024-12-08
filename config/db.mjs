import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://trankhanhnam0919:0919005689@cluster0.4f77y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Atlas connected successfully!');
  } catch (err) {
    console.error('Failed to connect to MongoDB Atlas:', err);
  }
};

export default connectDB;