import io from "socket.io-client";
let socket;

export const initSocket = () => {
  socket = io("wss://wunder-provider.herokuapp.com", {
    transports: ["websocket"]
  });
  socket.on("connect", () => console.log("connected"));
};

export const subscripeToUser = (cb) => {
  if (!socket) return true;
  socket.on("userList", (data) => {
    cb(data.results[0]);
  });
};
export const disconnectSocket = () => {
  console.log("Disconnecting...");
  if (socket) socket.disconnect();
};
