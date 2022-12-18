import { Router } from "express";
import { catchErrors } from "../config/helpers.js";
import { addRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/roomControllers.js";

/* Path avec ES modules*/ 
import path, { dirname } from 'path';
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const roomRouter = Router();


roomRouter.get('/', catchErrors(getRooms));

roomRouter.get('/:id', catchErrors(getRoom));

roomRouter.post('/', catchErrors(addRoom));

roomRouter.patch('/:id', catchErrors(updateRoom));

roomRouter.delete('/:id', catchErrors(deleteRoom));


export default roomRouter;