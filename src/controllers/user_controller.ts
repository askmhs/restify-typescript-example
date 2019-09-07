import {Controller} from "./controller";
import {Request, Response} from "restify";
import {IUser} from "../interfaces/user_interface";
import {UserService} from "../services/user_service";
import {UserRepository} from "../repositories/user_repository";
import {ApplicationController} from "../interfaces/app_interface";

export class UserController extends Controller implements ApplicationController {

    /**
     * Display a listing of the resource.
     * 
     * @param req Request
     * @param res Response
     */
    async index(req: Request, res: Response) {
        try {
            const result = await new UserRepository().index();
            super.successResponse(res, "Successfully get list user data", result);
        } catch (exception) {
            super.internalServerErrorresponse(res, [exception.message]);
        }
    }

    /**
     * Display the specified resources.
     * 
     * @param req Request
     * @param res Response
     */
    async show(req: Request, res: Response) {
        try {
            const result = await new UserRepository().show(req.params.id);
            super.successResponse(res, "Successfully get detail user data", result);
        } catch (exception) {
            super.internalServerErrorresponse(res, [exception.message]);
        }
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param req Request
     * @param res Response
     */
    async store(req: Request, res: Response) {
        try {
            const user: IUser = req.body;
            const result = await new UserService().store(user);
            super.successResponse(res, "Successfully create new user data", result);
        } catch (exception) {
            super.internalServerErrorresponse(res, [exception.message]);
        }
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param req Request
     * @param res Response
     */
    async update(req: Request, res: Response) {
        try {
            const user: IUser = req.body;
            const result = await new UserService().update(req.params.id, user);
            super.successResponse(res, "Successfully update user data", result);
        } catch (exception) {
            super.internalServerErrorresponse(res, [exception.message]);
        }
    }

    /**
     * Remove the specified resource from storage.
     * 
     * @param req Request
     * @param res Response
     */
    async destroy(req: Request, res: Response) {
        try {
            await new UserService().destroy(req.params.id);
            super.successResponse(res, "Successfully update user data", []);
        } catch (exception) {
            super.internalServerErrorresponse(res, [exception.message]);
        }
    }
}