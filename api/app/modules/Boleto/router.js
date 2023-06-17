import express from 'express';
import controller from './controller';
import { isAuthenticated } from '../auth/service';
const router = express.Router();
const URL = '/boletos/';

router.post(URL,isAuthenticated, controller.create);

module.exports = router;
