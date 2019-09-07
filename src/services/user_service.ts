import {userModel} from "../models/user_model";
import {IUser} from "../interfaces/user_interface";

export class UserService {

    async store(data: IUser): Promise<object> {
        return userModel.create(data);
    }

    async update(id: string, data: Partial<IUser>): Promise<object> {
        const user = await userModel.findByIdAndUpdate(id, {
            $set: data
        }, {
            new: true
        });

        if (user === null) {
            throw new Error("Whoops, the user data couldn't be found!");
        }

        return user;
    }

    async destroy(id: string): Promise<object> {
        const user = await userModel.findByIdAndRemove(id);

        if (user === null) {
            throw new Error("Whoops, the user data couldn't be found!");
        }

        return user;
    }
}