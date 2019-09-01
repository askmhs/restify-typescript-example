import {Request, Response} from "restify";

export interface ApplicationController {
    index(req: Request, res: Response): Promise<any>;

    show(req: Request, res: Response): Promise<any>;

    store(req: Request, res: Response): Promise<any>;

    update(req: Request, res: Response): Promise<any>;

    destroy(req: Request, res: Response): Promise<any>;
}