import { PostService } from "./post.service.js";
import { UserService } from "./user.service.js";

describe("Testing post service", () => {
    let postService: PostService
    let userService: UserService

    const title = "test"
    const content = "test"

    let postId = 0
    let authorId = 0

    beforeAll(async () => {
        postService = new PostService()
        const userService = new UserService()

        const user = await userService.create({
            name: "test",
            email: `test_post_${Date.now()}@jest.com`,
            password: "123456789",
            role: "DEFAULT"
        })

        authorId = user.id
    })

    it("Should create a new post", async () => {
        const newPost = await postService.create({ title, content, authorId })
        
        postId = newPost.id

        expect(newPost).toHaveProperty("id")
        expect(newPost.title).toBe(title)
        expect(newPost.content).toBe(content)
        expect(newPost.authorId).toBe(authorId)
    })

    it("Should find a post by id", async () => {
        const post = await postService.findById(postId)

        expect(post).toHaveProperty("id")
        expect(post!.title).toBe(title)
        expect(post!.content).toBe(content)
        expect(post!.authorId).toBe(authorId)
    })

    it("Should update a post", async () => {
        const post = await postService.findById(postId)

        const updated = await postService.update(post!.id, { title, content })

        expect(updated).toHaveProperty("id")
        expect(updated.title).toBe(title)
        expect(updated.content).toBe(content)
        expect(updated.authorId).toBe(authorId)
    })

    it("Should delete a post", async () => {
        const post = await postService.findById(postId)
        const deleted = await postService.delete(post!.id)

        expect(deleted).toHaveProperty("id")
        expect(deleted.title).toBe(title)
        expect(deleted.content).toBe(content)
        expect(deleted.authorId).toBe(authorId)
    })
})
