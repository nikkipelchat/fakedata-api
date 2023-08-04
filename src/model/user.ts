import { Pronoun } from '../model/pronoun'

export class User {
	constructor(
		public id: number,
		public first_name: string = "",
		public last_name: string = "",
		public pronouns: Pronoun[] = [],
		public email: string = ""
	) {}
}
