import * as React from 'react';
import { Peer } from 'peerjs';
import { ROOM_ID } from './room';

export default function Page() {
  const { id } = useClient({});

  return <div>Client ({id})</div>;
}

function useClient({ roomId = ROOM_ID }) {
  const [id, setId] = React.useState(``);

  React.useEffect(() => {
    console.log(`useClient`, roomId);

    let connection;
    async function connect() {
      try {
        connection = await connectToRoom({ roomId });
        console.log(connection);
        setId(connection.connectionId);
      } catch (err) {
        console.log(err);
      }
    }

    connect();

    return () => {
      if (connection) {
        connection.close();
      }
    };
  }, []);

  return { id };
}

const open = () =>
  new Promise((rs) => {
    const peer = new Peer();
    peer.on('open', (id) => {
      rs({ peer, id });
    });
  });

async function connectToRoom({ roomId }) {
  try {
    const { peer, id } = await open();

    const conn = peer.connect(roomId);
    conn.on('open', () => {
      console.log(`connected to ${roomId}`);
      conn.send({ type: `ping`, id, value: `Hi!` });
    });

    return conn;
  } catch (err) {
    console.log(err);
  }
}
