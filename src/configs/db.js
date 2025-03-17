import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            // useUnifiedTopology: true,
            // useNewUrlParser: true,
            serverSelectionTimeoutMS: 30000
        })
        console.log(`MongoDB Connected: ${process.env.MONGO_URL}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB