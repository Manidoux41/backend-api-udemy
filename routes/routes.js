import { Router } from "express";
import { catchErrors } from "../config/helpers.js";
import { addRoom, deleteRoom, getRoom, getRooms, getTest, postTest, updateRoom } from "../controllers/roomControllers.js";

const router = Router();

router.get('/', (_, res) => {
    res.send('Hello Everybody')
})

router.get('/test', getTest)
router.post('/test', postTest)

router.post('/room', catchErrors(addRoom));
router.get('/rooms', catchErrors(getRooms));
router.get('/room/:id', catchErrors(getRoom));
router.patch('/room/:id', catchErrors(updateRoom));
router.delete('/room/:id', catchErrors(deleteRoom));




export default router;