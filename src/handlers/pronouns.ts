import { Request, Response } from "express";

import UtilsController from "../controller/utils.controller";

export async function get(req: Request, res: Response) {
	const utilsController = new UtilsController();
	const pronouns = utilsController.getPronouns();
	res.send(pronouns);
}
