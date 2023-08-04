import { User } from "../src/model/user";
import { PronounEnum, Pronoun } from "../src/model/pronoun";


export const Pronouns: Pronoun[] = [
  { "id": 1, "name": PronounEnum.HER },
  { "id": 1, "name": PronounEnum.HIM },
  { "id": 1, "name": PronounEnum.THEY },
  { "id": 1, "name": PronounEnum.ZE },
  { "id": 1, "name": PronounEnum.OTHER }
]

export const Users: User[] = [
  { "id": 1, "first_name": "nikki", "last_name": "pelchat", "pronouns": [Pronouns[0]], "email": "nikki.fake@email.com" },
  { "id": 2, "first_name": "carly", "last_name": "st onge", "pronouns": [Pronouns[0]], "email": "carly.fake@email.com" },
  { "id": 3, "first_name": "evan", "last_name": "pelchat", "pronouns": [Pronouns[1]], "email": "evan.fake@email.com" }
]
