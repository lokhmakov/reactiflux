import * as React from 'react';
import { Peer } from 'peerjs';

export const ROOM_ID = `evokeme-box-1`;

export default function Page() {
  const { peer } = usePeer({ id: ROOM_ID });
  useRoom({ peer });

  return <div>Room ({peer ? peer.id : `not connected`})</div>;
}

const open = ({ id }) =>
  new Promise((rs) => {
    const peer = new Peer(id);
    peer.on('open', (peerId) => {
      rs({ peer, peerId });
    });
  });

async function startPeer({ id }) {
  try {
    const { peer } = await open({ id });
    return { peer };
  } catch (err) {
    console.log(err);
  }
}

function usePeer({ id = undefined }) {
  const [peer, setPeer] = React.useState(null);

  React.useEffect(() => {
    async function start() {
      const { peer } = await startPeer({ id });
      setPeer(peer);
    }
    start();
  }, []);

  return { peer };
}

function useRoom({ peer }) {
  React.useEffect(() => {
    if (peer !== null) {
      let conn;
      let onData;
      let onOpen;

      peer.on('connection', (_conn) => {
        conn = _conn;

        console.log(conn);

        onData = (data) => conosle.log(data);
        onOpen = () => conn.send(`Hi from room!`);

        conn.on('data', onData);
        conn.on('open', onOpen);
      });

      return () => {};
    }
  }, [peer]);
}
