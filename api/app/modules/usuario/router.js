import express from 'express';
import controller from './controller';
import { isAuthenticated } from '../auth/service';

const router = express.Router();
const URL = '/users/';

router.get(URL, isAuthenticated, controller.findAll);
router.get(`${URL}:id`, isAuthenticated, controller.findOne);
router.post(URL, isAuthenticated, controller.create);
router.put(`${URL}:id`, isAuthenticated, controller.update);
router.delete(`${URL}:id`, isAuthenticated, controller.destroy);

module.exports = router;
