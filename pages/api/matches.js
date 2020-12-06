import { connectToDatabase } from '../../util/mongodb';

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { method } = req;
  switch (method) { 
    case("POST"):
      const data = JSON.parse(Object.keys(req.body)[0]);
      db.collection('matches').insertOne(data);
      res.json({ message: 'Match Added' });

    case("PUT"):
      let { matchId } = req.body;
      let { score } = req.body;
      if (typeof req.body === 'string') {
        const parsedJSON = JSON.parse(req.body);
        matchId = parsedJSON.matchId;
        score = parsedJSON.score;
      }
      db.collection('matches').updateOne({ matchId }, { $set: { currentGame: score } });
      res.json({ message: 'UPDATED SUCCESSFULLY' });

    case("GET"):
      const match = await db.collection('matches').findOne(req.query);
      res.json(match);
  }
};
