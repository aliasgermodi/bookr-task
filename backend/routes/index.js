import express from 'express';
import checkAuth from '../utils/checkAuth.js';
import authRoutes from './auth.js';
import tasksRoutes from './tasks.js';

const router = express.Router();


// router.get('/test', (req, res) => {
//     res.json('test');
// });

router.use('/auth', authRoutes);
router.use('/tasks', checkAuth, tasksRoutes);

export default router;