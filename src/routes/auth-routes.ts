import BaseRouter from '../utils/router-base';
import * as controller from '../controllers/auth-controller';

class AuthRoutes extends BaseRouter {
  routes(): void {
    this.router.post('/signup', controller.signup);
    this.router.post('/signin', controller.signin);
  }
}

export default new AuthRoutes().router;
