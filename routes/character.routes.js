import express from 'express';
import { characterController } from '../controllers/character.controller.js';

const router = express.Router();

router.get('/data', characterController.getData);

export const characterRoutes = router;
