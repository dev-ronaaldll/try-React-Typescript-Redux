import { getPosts,getPost, createPost, deletePost, updateePost } from './../controllers/posts.controllers';
import { Router } from "express";


const router = Router();

router.get("/posts",getPosts)
router.get("/posts/:id",getPost)
router.post("/posts",createPost)
router.delete("/posts/:id",deletePost)
router.put("/posts/:id",updateePost)

export default router;