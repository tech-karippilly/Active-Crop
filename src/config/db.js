import mongoose from "mongoose";

const MAX_RETRIES = 5;
const RETRY_INTERVAL = 3000; 

async function ConnectDb(retries = MAX_RETRIES) {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error(`MongoDB connection failed: ${error.message}`);

        if (retries > 0) {
            console.log(`Retrying connection in ${RETRY_INTERVAL / 1000} seconds... (${retries} retries left)`);
            setTimeout(() => ConnectDb(retries - 1), RETRY_INTERVAL);
        } else {
            console.error("Max retries reached. Could not connect to MongoDB.");
            process.exit(1);
        }
    }
}

export default ConnectDb;
