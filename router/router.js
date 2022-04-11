import { Router } from "express";
import postRouter from './posts.js'
const router = Router()


router.use('/posts', postRouter)

export default router;