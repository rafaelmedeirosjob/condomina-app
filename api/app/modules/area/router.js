import express from 'express';
import controller from './controller';
import { isAuthenticated } from '../auth/service';
const router = express.Router();
const URL = '/areas/';

router.get(URL,isAuthenticated, controller.findAll);
router.post(URL,isAuthenticated, controller.add);
router.put(URL,isAuthenticated, controller.update);
router.delete(`${URL}:id`,isAuthenticated, controller.destroy);

module.exports = router;
