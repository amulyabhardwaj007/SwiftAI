import express from 'express'
import { clearUserCreations, deleteUserCreation, getPublicCreations, getUserCreations, toggleLikeCreations } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/get-user-creations', getUserCreations);
userRouter.get('/get-published-creations', getPublicCreations);
userRouter.delete('/clear-creations', clearUserCreations);
userRouter.delete('/delete-creation/:id', deleteUserCreation);
userRouter.post('/toggle-like-creations', toggleLikeCreations);


export default userRouter;
