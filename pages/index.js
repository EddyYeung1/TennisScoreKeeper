import Head from 'next/head';
import Scoreboard from '../components/scoreboard';
import { connectToDatabase } from '../util/mongodb';

export default function Home({ isConnected }) {
  return (
    <div>
      {isConnected ? (
        <h2 className="subtitle">You are connected to MongoDB</h2>
      ) : (
        <h2 className="subtitle">
          You are NOT connected to MongoDB. Check the
          {' '}
          <code>README.md</code>
          {' '}
          for
          instructions.
        </h2>
      )}
      <Scoreboard />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected(); // Returns true or false

  return {
    props: { isConnected },
  };
}
