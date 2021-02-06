import {Router} from 'express';
import Route from './router-interface';

abstract class BaseRouter implements Route {
  public router: Router;

  constructor() {
    this.router = new (Router as any);
    this.routes();
  }

  abstract routes(): void;
};

export default BaseRouter;
