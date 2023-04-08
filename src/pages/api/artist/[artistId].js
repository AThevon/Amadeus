import connectToDatabase from "@/lib/db";
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    const artistId = req.query.artistId;
    const idFormatted = new ObjectId(artistId);

    const method = req.method;

    try {
        const db = await connectToDatabase();

        let data;
        switch (method) {
            case 'GET':
                data = await db.collection("artist").findOne({_id: idFormatted});
                break;
            case 'PUT':
                data = await db.collection("artist").updateOne(idFormatted, { $set: req.body } );
                break;
            case 'DELETE':
                data = await db.collection("artist").deleteOne(idFormatted);
                res.json({ ...data, message: `Artist ${idFormatted} deleted` });
                break;
            case 'POST':
                data = await db.collection("artist").insertOne(req.body);
                res.json({ ...data, message: `Artist ${idFormatted} created` });
                break;

            default:
                res.status(405).json({ message: "Method not allowed" });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while fetching the artist" });
    }
}