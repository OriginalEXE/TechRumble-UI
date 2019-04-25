import socketCluster from 'socketcluster-client';

const SOCKET_OPTIONS = {
  port: process.env.SC_PORT,
  hostname: process.env.SC_HOSTNAME,
  secure: true,
};

const socket = socketCluster.create (SOCKET_OPTIONS);

export default socket;
