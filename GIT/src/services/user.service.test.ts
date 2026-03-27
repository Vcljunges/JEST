import { UserService } from "./user.service.js";

describe("Testing user service", () => {
    
    beforeAll(async () => {
        userService = new UserService()
    })

    it("should create a new user", async () => {
        const user = await userService.create({ name, email, password, role })
    })
    
})