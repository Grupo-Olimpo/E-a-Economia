import express from 'express';

const router = express.Router();

router.use('/cadastro', require('./cadastro').default);
router.use('/login', require('./login').default);
router.use('/transaction', require('./transaction').default);

export default router;
