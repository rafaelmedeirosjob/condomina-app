import express from 'express';
import controller from './controller';
import multer from 'multer'
import { isAuthenticated } from '../auth/service';
const multerConfig = require("../../../config/multer")
const router = express.Router();
const URL = '/documentos/';

router.get(`${URL}:id`,isAuthenticated, controller.findAll);
router.post(`${URL}:id`,isAuthenticated, multer(multerConfig).single('file'), controller.add);
router.delete(`${URL}:id`,isAuthenticated, controller.destroy);

module.exports = router;
