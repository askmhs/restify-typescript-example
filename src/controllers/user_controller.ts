import {Request, Response} from "restify";
import {IUser} from "../interfaces/user_interface";
import {UserService} from "../services/user_service";
import {UserRepository} from "../repositories/user_repository";
import {ApplicationController} from "../interfaces/app_interface";

export class UserController implements ApplicationController {

    async index(req: Request, res: Response) {
        try {
            const result = await new UserRepository().index();
            return res.json(result);
        } catch (exception) {
            res.status(500);
            res.json("An error occurred!");
        }
    }

    async show(req: Request, res: Response) {
        try {
            const result = await new UserRepository().show(req.params.id);
            return res.json(result);
        } catch (exception) {
            res.status(500);
            res.json("An error occurred!");
        }
    }

    async store(req: Request, res: Response) {
        try {
            const user: IUser = req.body;
            const result = await new UserService().store(user);
            return res.json(result);
        } catch (exception) {
            res.status(500);
            res.json("An error occurred!");
        }
    }

    async update(req: Request, res: Response) {
        try {
            const user: IUser = req.body;
            const result = await new UserService().update(req.params.id, user);
            return res.json(result);
        } catch (exception) {
            res.status(500);
            res.json("An error occurred!");
        }
    }

    async destroy(req: Request, res: Response) {
        try {
            await new UserService().destroy(req.params.id);
            return res.json(`Successfully delete user with ID ${req.params.id}`);
        } catch (exception) {
            res.status(500);
            res.json("An error occurred!");
        }
    }
}