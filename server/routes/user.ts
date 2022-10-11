import { Router } from "express";

import {createUser,getUser,updateUser,deleteUser} from "../controller/user";

const router=Router();

router.get('/',getUser);
router.post('/',createUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

export default router;