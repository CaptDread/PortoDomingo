import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }
  
  let cached = (global as unknown).mongoose;
  
  if (!cached) {
    cached = (global as unknown).mongoose = { conn: null, promise: null };
  }
  
  async function connectToDatabase() {
    if (cached.conn) {
      return cached.conn;
    }
  
    if (!cached.promise) {
      const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false,
      };
  
      cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        return mongoose;
      });
    }
  
    try {
      cached.conn = await cached.promise;
      console.log('Connected to MongoDB');
      return cached.conn;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }
  
  export default connectToDatabase;
