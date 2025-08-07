import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_URI, DB_NAME } = process.env;

// Cache the connection promise to avoid multiple connections
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const DBInstance = async () => {
    // Check if already connected
    if (cached.conn && mongoose.connection.readyState === 1) {
        return cached.conn;
    }

    // Check if environment variables exist
    if (!MONGO_URI) {
        throw new Error('MONGO_URI environment variable is not defined');
    }

    if (!cached.promise) {
        const opts = {
            dbName: DB_NAME,
            maxPoolSize: 5,
            serverSelectionTimeoutMS: 3000,
            socketTimeoutMS: 8000,
            connectTimeoutMS: 8000,
            maxIdleTimeMS: 30000,
        };

        // console.log('Attempting to connect to MongoDB...');

        cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
            // console.log('✅ Connected to MongoDB successfully');
            return mongoose;
        }).catch((error) => {
            console.error('❌ MongoDB connection error:', error.message);
            cached.promise = null;
            throw error;
        });
    }

    try {
        cached.conn = await cached.promise;
        return cached.conn;
    } catch (e) {
        cached.promise = null;
        console.error('❌ Failed to establish MongoDB connection:', e.message);
        throw e;
    }
};

export default DBInstance;
