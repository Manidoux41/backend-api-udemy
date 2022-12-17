import { Router } from "express";
import { addRoom, getTest, postTest } from "../controllers/roomControllers.js";

const router = Router();

router.get('/', (_, res) => {
    res.send('Hello Everybody')
})

router.get('/test', getTest)

router.post('/test', postTest)

router.post('/room', addRoom);

export default router;