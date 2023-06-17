import express from 'express'
import controller from './controller'
import { isAuthenticated } from '../auth/service';
const router = express.Router()
const URL = '/inadimplencias/'

router.get(URL,isAuthenticated, controller.getAllInadiplenciasMorador)
router.post(URL,isAuthenticated, controller.add)
router.put(URL,isAuthenticated, controller.update)

module.exports = router
