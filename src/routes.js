import { Router } from 'express';
import StudentController from './app/controller/StudentController';

const routes = new Router();

routes.post('/cadastro', StudentController.store);

export default routes;
