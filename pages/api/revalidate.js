export default async function handler(req, res) {
    if (req.query.secret !== process.env.REVALIDATE_SECRET) {
        console.log(req.query.secret);
        console.log(process.env.REVALIDATE_SECRET);
        return res.status(401).json({ message: 'Invalid token' });
    }

    try {
        await res.revalidate('/bookmarks');
        return res.json({ revalidated: true });
    } catch (error) {
        return res.status(500).send('Error revalidating');
    }
}
