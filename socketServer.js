var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("a user connectedb id: ", socket.id);
  socket.emit("DATA_IN_SOCKET", socket.id);
});

http.listen(5000, () => {
  console.log("listening on *:5000");
});
