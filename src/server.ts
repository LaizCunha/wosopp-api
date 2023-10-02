import express from "express";
import { router } from "./routes/indexRouter";


const serverPort = 3000;

const server = express();

server.use(express.json());

server.use(router);

server.listen(serverPort, () => console.log(`Server running on port ${serverPort}`));
