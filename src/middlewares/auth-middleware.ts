import {Request, Response, NextFunction} from 'express';
import {verify} from 'jsonwebtoken';

const authentication = (req: Request, res: Response, next: NextFunction): any => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      status: 'error',
      message: 'Unauthorized',
    });
  }

  const secretKey: string = process.env.ACCESS_TOKEN || 'ACCESS_TOKEN';
  verify(token, secretKey, (error, user) => {
    if (error) {
      return res.status(403).json({
        status: 'error',
        message: error.message,
      });
    }
    req.app.locals.user = user;
    next();
  });
};

export default authentication;
