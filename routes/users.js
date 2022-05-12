import express from 'express';

import { createNewUser, getAllUsers, getSpecificUser, deleteUser, updateUser} from '../controllers/users.js';

const router = express.Router();



router.get('/', getAllUsers);

router.post('/', createNewUser);

router.get('/:id', getSpecificUser);

 router.delete('/:id', deleteUser)

 router.patch('/:id', updateUser)

export default router;