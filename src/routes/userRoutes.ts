import { Router } from 'express';
import { register, login } from '../controllers/userController.ts';

const router = Router();
router.get('/register', (req, res) => res.render('register'));
router.post('/register', register);
router.get('/login', (req, res) => res.render('login', { success: req.query.success }));
router.post('/login', login);
router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/users/login');
  });
});

export default router;
