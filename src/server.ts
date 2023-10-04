import express from "express";
import { router } from "./routes/indexRouter";
import cors from "cors";

const serverPort = 3000;

const server = express();

server.use(express.json());
server.use(cors());
server.use(router);

server.listen(serverPort, () => console.log(`Server running on port ${serverPort}`));
