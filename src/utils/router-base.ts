import {Router} from 'express';
import Routes from './routes-interface';

abstract class BaseRouter implements Routes {
  public router: Router;

  constructor() {
    this.router = new (Router as any);
    this.routes();
  }

  abstract routes(): void;
};

export default BaseRouter;
