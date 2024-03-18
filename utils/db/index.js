import mongoose from "mongoose";

const { NEXT_PUBLIC_MONGO_URI, NEXT_PUBLIC_DB_NAME } = process.env;

const DBInstance = async () => {
    try {
        await mongoose.connect(NEXT_PUBLIC_MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: NEXT_PUBLIC_DB_NAME
        });

        // console.log(`✅ Connected to MongoDB: ${NEXT_PUBLIC_DB_NAME}`);
    } catch (err) {
        // console.error("❌ Could not connect to MongoDB\n", err.message);
        throw err;
    }
};
export default DBInstance;