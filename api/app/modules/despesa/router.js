import express from 'express';
import controller from './controller';
import { isAuthenticated } from '../auth/service';
const router = express.Router();
const URL = '/despesas/';

router.get(URL,isAuthenticated, controller.findAll);
router.post(URL,isAuthenticated, controller.add);
router.get(`${URL}:id`,isAuthenticated, controller.getByPk);
router.put(URL,isAuthenticated, controller.update);
router.put(URL+'pagamento',isAuthenticated, controller.efetuaPagamento);
router.delete(`${URL}:id`,isAuthenticated, controller.destroy);

module.exports = router;
