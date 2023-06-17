import express from 'express';
import controller from './controller';

const router = express.Router();
const URL = '/auth';

router.post(URL, controller.handleLoginAdmin);
router.post(URL+'/mobile', controller.handleLoginApp);

module.exports = router;
