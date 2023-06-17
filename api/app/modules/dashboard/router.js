import express from 'express';
import controller from './controller';
import { isAuthenticated } from '../auth/service';
const router = express.Router();
const URL = '/dashboard/';

router.get(URL+"receita",isAuthenticated, controller.receita);
router.get(URL+'donut',isAuthenticated, controller.donut);

module.exports = router;
