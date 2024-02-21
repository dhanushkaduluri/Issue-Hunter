import mongoose from 'mongoose';

const url = 'mongodb+srv://dhanushkaduluri:630356Dk@cluster0.fbxouqf.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url);
const db = mongoose.connection;

// If any Error then Getting this Line
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', () => {
    console.log("Connected to Database :: MongoDB ");
});

export default db; // Exports db
