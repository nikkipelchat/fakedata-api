import { Pronouns } from "../../db/fakeData";
import { Pronoun } from "../model/pronoun";

export default class UtilsController {
	getPronouns(): Pronoun[] {
		const result = Pronouns;
		return result;
	}
}
