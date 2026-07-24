import { Router } from 'express';
import { isAuthenticated } from '../middlewares/authMiddleware.ts';
import { listContacts, showCreate, create, showEdit, update, remove } from '../controllers/contactController.ts';

const router = Router();

router.use(isAuthenticated);

router.get('/', listContacts);
router.get('/add', showCreate);
router.post('/add', create);
router.get('/edit/:id', showEdit);
router.post('/edit/:id', update);
router.post('/delete/:id', remove);

export default router;
