import { UserService } from "./user.service.js";

describe("Testing user service", () => {
    let userService: UserService
    const name = "test"
    const email = "[EMAIL_ADDRESS]"
    const password = "123456789"
    const role = "DEFAULT"

    beforeAll(async () => {
        userService = new UserService()
    })

    it("should create a new user", async () => {
        const newUser = await userService.create({ name, email, password, role })

        expect(newUser).toHaveProperty("id")
        expect(newUser.email).toBe(email)
    })
})
