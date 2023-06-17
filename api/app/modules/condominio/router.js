import express from 'express';
import controller from './controller';
import { isAuthenticated } from '../auth/service';
const router = express.Router();
const URL = '/condominio/';

router.get(URL+'caixa',isAuthenticated, controller.getCaixa);

module.exports = router;
