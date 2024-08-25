import {Router} from 'express';
const router=Router();

  
import { registerUser, loginUser, logoutUser } from '../controllers/user.controller.js'
  import { verifyToken } from '../middlewares/Auth.middleware.js'; 

router.post('/register-User',registerUser);
router.post('/login-User', loginUser);
router.get('/logout-User',verifyToken,logoutUser);


export default router;