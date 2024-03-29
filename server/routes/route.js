import express from 'express';
import { addUser, getUsers, deleteUser, getUser, editUser } from '../controller/user-controller.js';


const router = express.Router();

router.post('/add', addUser);
router.get('/all', getUsers);
router.delete('/:id', deleteUser);
router.get('/:id', getUser);
router.post('/:id', editUser);



export default router;