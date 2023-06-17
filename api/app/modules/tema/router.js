import express from 'express';
import controller from './controller';
import { isAuthenticated } from '../auth/service';
const router = express.Router();
const URL = '/temas/';

router.get(URL,isAuthenticated, controller.findAll);

module.exports = router;
