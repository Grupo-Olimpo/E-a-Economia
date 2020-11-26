import express from 'express';

const router = express.Router();

router.use('/cadastro', require('./cadastro').default);
router.use('/login', require('./login').default);

export default router;
