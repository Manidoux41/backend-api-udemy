import { Router } from "express";
import { signUp } from '../controllers/authController.js'
import { catchErrors } from "../config/helpers.js";

/* Path avec ES modules*/ 
import path, { dirname } from 'path';
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const userRouter = Router();

userRouter.post('/register', catchErrors(signUp));

export default userRouter;