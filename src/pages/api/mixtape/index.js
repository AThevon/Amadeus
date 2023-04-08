import connectToDatabase from "@/lib/db";

export default async function handler(req, res) {
    try {
    const db = await connectToDatabase();
    const data = await db.collection("mixtape").find({}).toArray();
    res.json(data);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while fetching all the artists" });
    }
}