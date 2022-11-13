import { Router } from 'express';

import { login, signup } from '../controllers/auth.controller';
import emailExists from '../middleware/email-exists';
import loginValidation from '../middleware/login-validaton';
import usernameExists from '../middleware/username-exists';

const router = Router();

// POST
router.post('/signup', [emailExists, usernameExists], signup);
router.post('/login', loginValidation, login);

export default router;
