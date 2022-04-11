import { Router } from "express";
import { SUCCESS, FAILURE } from '../config/constants.js'
import Post from "../db/PostSchema.js";
const router = Router()
router.get('/test', (req, res) => {
    console.log("test run");
    res.json({
        message: 'app'
    })
})
router.get('/', (req, res) => {

    Post.find({})
        .then(docs => {
            res.status(SUCCESS).json(docs)
        }).catch(err => {
            res.status(FAILURE).json({
                message: err.message
            })
        })
})


router.post('/upload', (req, res) => {
    const { headline, content, author } = req.body

    const newpost = new Post({
        headline: headline,
        content: content,
        author: author
    })

    newpost.save()
        .then(result => {
            res.status(SUCCESS).json(result)
        }).catch(err => {
            res.status(FAILURE).json(err)
        })
})

export default router;