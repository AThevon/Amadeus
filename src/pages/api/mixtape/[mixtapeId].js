import connectToDatabase from "@/lib/db";
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    const mixtapeId = req.query.mixtapeId;
    const idFormatted = new ObjectId(mixtapeId);

    const method = req.method;

    try {
        const db = await connectToDatabase();

        let data;
        switch (method) {
            case 'GET':
                data = await db.collection("mixtape").findOne({_id: idFormatted});
                break;
            case 'PUT':
                data = await db.collection("mixtape").updateOne(idFormatted, { $set: req.body } );
                break;
            case 'DELETE':
                data = await db.collection("mixtape").deleteOne(idFormatted);
                res.json({ ...data, message: `mixtape ${idFormatted} deleted` });
                break;
            case 'POST':
                data = await db.collection("mixtape").insertOne(req.body);
                res.json({ ...data, message: `mixtape ${idFormatted} created` });
                break;

            default:
                res.status(405).json({ message: "Method not allowed" });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while fetching the mixtape" });
    }
}