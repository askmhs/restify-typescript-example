import {userModel} from "../models/user_model";

export class UserRepository {

    index() {
        return userModel.find();
    }

    show(id: string) {
        return userModel.findById(id);
    }
}