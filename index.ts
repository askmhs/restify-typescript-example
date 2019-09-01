import * as restify from "restify";
import {config} from "dotenv";
import {Database} from "./config/database";
import {router} from "./src/http/routes/index";

/**
 * Creating server
 */
const server: restify.Server = restify.createServer({
    name: "restify-typescript-example",
    version: "1.0.0"
});

/**
 * Configure restify parser plugins
 */
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

/**
 * Read ENV file
 */
config({
    path: "./.env"
});

/**
 * Attempt to connect to database
 */
const db = new Database();
db.databaseURI = process.env.DB_URI;
db.connect();

/**
 * Routes handler
 */
router(server);

/**
 * Starting restify server
 */
server.listen(process.env.APP_PORT, () => {
    console.log(`Server started on port ${process.env.APP_PORT}`);
});