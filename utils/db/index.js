import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_URI, DB_NAME , RECRUITMENT_MONGO_URI , RECRUITMENT_DB_NAME } = process.env;

const DBInstance = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: DB_NAME
        });

        // console.log(`✅ Connected to MongoDB: ${NEXT_PUBLIC_DB_NAME}`);
    } catch (err) {
        // console.error("❌ Could not connect to MongoDB\n", err.message);
        throw err;
    }
};

const RecruitmentDBInstance = async () => {
    try {
        await mongoose.connect(RECRUITMENT_MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: RECRUITMENT_DB_NAME
        });

        // console.log(`✅ Connected to MongoDB: ${NEXT_PUBLIC_DB_NAME}`);
    } catch (err) {
        // console.error("❌ Could not connect to MongoDB\n", err.message);
        throw err;
    }
};

export default DBInstance;
export {RecruitmentDBInstance}
