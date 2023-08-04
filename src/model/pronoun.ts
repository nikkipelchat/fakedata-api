export enum PronounEnum {
	HER = "She/Her",
	THEY = "They/Them",
	ZE = "Ze/Hir",
	HIM = "He/Him",
	OTHER = "Other",
}

export class Pronoun {
	constructor(
		public id: number,
		public name: String = PronounEnum.OTHER
	) {}
}
