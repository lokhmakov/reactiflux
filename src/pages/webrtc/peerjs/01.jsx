import { Peer } from 'peerjs';

export default function Page() {
  usePeer();

  return <div>peerjs</div>;
}

function usePeer() {
  React.useEffect(() => {
    console.log(`usePeer`);
  }, []);
}
