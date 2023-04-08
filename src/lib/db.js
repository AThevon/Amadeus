import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
    if (!clientPromise) {
        console.log('nodenv est passé');
        clientPromise = MongoClient.connect(uri, options);
    }
}

export default async function connectToDatabase() {
    if (!client) {
        client = await clientPromise;
    }
    return client.db('amadeus');
}

