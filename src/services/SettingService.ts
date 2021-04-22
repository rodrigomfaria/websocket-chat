import { getCustomRepository } from "typeorm";
import { SettingRepository } from "../repositories/SettingRepository";

interface ISettingCreate {
    chat: boolean,
    username: string
}

class SettingService {

    private settingRepository: SettingRepository;

    constructor() {
        this.settingRepository = getCustomRepository(SettingRepository);
    }

    async create({ chat, username }: ISettingCreate) {

        const userAlreadyExists = await this.settingRepository.findOne({ username });

        if (userAlreadyExists) {
            throw new Error("User already exists!!!");
        }

        const setting = this.settingRepository.create({
            chat,
            username
        });

        await this.settingRepository.save(setting);

        return setting;
    }
}

export { SettingService }