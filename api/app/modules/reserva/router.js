import express from 'express';
import controller from './controller';
import { isAuthenticated } from '../auth/service';
const router = express.Router();
const URL = '/reservas/';

router.get(URL,isAuthenticated, controller.findAll);
router.get(URL+"area",isAuthenticated, controller.findForArea);
router.post(URL,isAuthenticated, controller.add);
router.put(URL,isAuthenticated, controller.update);
router.delete(`${URL}:id`,isAuthenticated, controller.destroy);

module.exports = router;
