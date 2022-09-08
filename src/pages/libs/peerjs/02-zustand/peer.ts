export {}

// import { Peer } from 'peerjs';
// import create from 'zustand';

// const usePeer = create<{
//   peer?: Peer;
//   peerId?: string;
//   connect: (params: { id: string }) => Promise<void>;
// }>((set) => ({
//   peer: undefined,
//   peerId: undefined,
//   connect: async (params) => {
//     const { peer, peerId } = await open({ id: params.id });
//     set({ peer, peerId });
//   },
// }));

// const open = (params: {
//   id: string;
// }): Promise<{ peer: Peer; peerId: string }> =>
//   new Promise((rs) => {
//     const peer = new Peer(params.id);
//     peer.on('open', (peerId) => {
//       rs({ peer, peerId });
//     });
//   });
