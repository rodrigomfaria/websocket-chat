import { Router } from "express";
import { SettingController } from "./controllers/SettingController"
import { UserController } from "./controllers/UserController";
import { MessageController } from "./controllers/MessageController";

const routes = Router();

const settingController = new SettingController();
const userController = new UserController
const messageController = new MessageController();

routes.post("/setting", settingController.create);
routes.post("/setting/:username", settingController.findByUsername);
routes.put("/setting/:username", settingController.update);

routes.post("/user", userController.create)

routes.post("/message", messageController.create)
routes.get("/message/:id", messageController.showByUser)


export { routes };