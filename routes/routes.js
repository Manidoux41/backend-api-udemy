import { Router } from "express";
import { catchErrors } from "../config/helpers.js";
import { addRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/roomControllers.js";

/* Path avec ES modules*/ 
import path, { dirname } from 'path';
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();


router.get('/api/rooms', catchErrors(getRooms));

router.get('/api/rooms/:id', catchErrors(getRoom));

router.post('/api/rooms', catchErrors(addRoom));

router.patch('/api/rooms/:id', catchErrors(updateRoom));

router.delete('/api/rooms/:id', catchErrors(deleteRoom));




export default router;