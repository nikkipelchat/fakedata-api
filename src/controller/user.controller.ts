import { Users } from "../../db/fakeData";
import { User } from "../model/user";

export default class UserController {
	getUsers(): User[] | null {
		return Users
	}

	getUserByUserId(userIdString: string): User | null {
		const users = this.getUsers()
		const userId = Number(userIdString)

		const user = (users || []).find((u) => u.id === userId)
		if (!users || !user) {
			return null
		} else {
			return user
		}
	}
}
