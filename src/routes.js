import { Router } from 'express';

const routes = new Router();

routes.post('/root', (req, res) => {
  res.send({ ok: true });
});

export default routes;
