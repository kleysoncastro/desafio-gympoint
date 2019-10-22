import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authContig from '../../config/authConfig';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authContig) {
    return res.status(401).json({ erro: 'Token nao aprovaado' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authContig.secret);
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ erro: 'Token Invalido' });
  }
};
