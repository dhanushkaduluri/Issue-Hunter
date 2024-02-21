import express from 'express';
import * as projectController from '../controllers/project_controller.js';

const router = express.Router();

router.post('/create', projectController.create);
router.get('/:id', projectController.project);
router.post('/:id', projectController.createIssue);

export default router;
