import express from 'express';
import {home} from '../controllers/home_controller.js';
import router from './project.js';

const Mainrouter = express.Router();
console.log('router loaded');

Mainrouter.get('/', home);
Mainrouter.use('/project', router);

export default Mainrouter;
