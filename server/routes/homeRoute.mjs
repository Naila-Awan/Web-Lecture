import express from 'express';
import showHomePage from '../controller/homeController.mjs';

const router = express.Router();

router.get('/', showHomePage);

export default router;