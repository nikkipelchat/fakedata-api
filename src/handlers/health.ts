import { Request, Response } from "express";

export async function get(req:Request, res:Response) {
  res.sendStatus(200);
}
