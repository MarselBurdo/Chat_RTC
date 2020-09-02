import express from "express";
import httpNew from "http";
import ioNew from "socket.io";
import {useMiddleware}  from "./middleware.js"

const app = express();
useMiddleware(app)
const http = httpNew.createServer(app);
const io = ioNew(http, {
  transports: ["websocket", "polling"],
});

const PORT = process.env.PORT || "4444";


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
