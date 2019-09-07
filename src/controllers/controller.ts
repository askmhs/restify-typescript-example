import {Response} from "restify";

export class Controller {

    /**
     * Succes response builder
     * 
     * @param response Response
     * @param message string
     * @param data object
     */
    successResponse(response: Response, message: string, data: object) {
        response.status(200);
        return response.json({
            success: true,
            message: message,
            error_code: null,
            errors: [],
            data: data
        });
    }

    /**
     * Not found response
     * This would be used if the resource not found
     * 
     * @param response Response
     * @param errors string[]
     * @param error_code number
     */
    notFoundResponse(response: Response, errors: string[], error_code: number = 0) {
        response.status(404);
        return response.json({
            success: false,
            message: null,
            error_code: error_code,
            errors: errors,
            data: null
        });
    }

    /**
     * Internal server error response
     * 
     * @param response Response
     * @param errors string[]
     * @param error_code number
     */
    internalServerErrorresponse(response: Response, errors: string[], error_code: number = 5) {
        response.status(500);
        return response.json({
            success: false,
            message: null,
            error_code: error_code,
            errors: errors,
            data: null
        });
    }
}