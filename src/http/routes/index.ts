import * as restify from "restify";
import {UserController} from "../../controllers/user_controller";

export const router = (server: restify.Server) => {
    const userController: UserController = new UserController();

    server.get("/user", userController.index);
    server.get("/user/:id", userController.show);
    server.post("/user", userController.store);
    server.put("/user/:id", userController.update);
    server.del("/user/:id", userController.destroy);
};