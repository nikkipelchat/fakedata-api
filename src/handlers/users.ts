import { Request, Response } from "express";

import UsersController from "../controller/user.controller";

export async function get(req: Request, res: Response) {
	const usersController = new UsersController();
	const users = usersController.getUsers();
	res.send(users);
}
