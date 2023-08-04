import { Request, Response } from "express";
import UserController from "../../controller/user.controller";

export async function get(req: Request, res: Response) {
	const userController = new UserController();
	const { id } = req.params;
	const user = userController.getUserByUserId(id);
	if (!user) {
		res.status(404).send({ message: "No user was found" });
	} else {
		res.send(user);
	}
}
