import express from "express";
import httpNew from "http";
import ioNew from "socket.io";
import {useMiddleware}  from "./middleware.js"
import {addUser, getUsersInRoom, getUser, removeUser}  from "./chatFunc.js"

const app = express();
useMiddleware(app)
const http = httpNew.createServer(app);
const io = ioNew(http);

const PORT = process.env.PORT || "4444";

//socket connection
const users = {};

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    console.log(name, room);
    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message, date: Date.now()});

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })

  //video socket connection
  if (!users[socket.id]) {
    users[socket.id] = socket.id;
    
  }
  socket.emit("yourID", socket.id);
  io.sockets.emit("allUsers", users);
  socket.on("disconnect", () => {
    delete users[socket.id];
  });

  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit("hey", {
      signal: data.signalData,
      from: data.from,
      });
  });

  socket.on("acceptCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});

async function start() {
  try {
    http.listen(PORT, () => {
      console.log(`Listening port ${PORT}!`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
