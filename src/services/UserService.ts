import { response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

class UserService {

    private userRepository: UserRepository;

    constructor() {
        this.userRepository = getCustomRepository(UserRepository);
    }

    async create(email: string) {

        const userExists = await this.findByEmail(email);

        if (userExists) {
            return userExists;
        };

        const user = this.userRepository.create({
            email
        });

        await this.userRepository.save(user);

        return user;
    }

    async findByEmail(email: string) {
        const userExists = await this.userRepository.findOne({ email });
        return userExists;
    }

}

export { UserService }