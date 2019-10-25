import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';
import StudentController from './app/controller/StudentController';
import SessionController from './app/controller/SessionController';

const routes = new Router();

routes.post('/session', SessionController.store);
routes.use(authMiddleware);
routes.post('/cadastro', StudentController.store);
routes.put('/update', StudentController.update);

export default routes;
