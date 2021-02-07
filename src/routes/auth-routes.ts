import BaseRouter from '../utils/router-base';
import validate from '../middlewares/validate-middleware';
import SignupSchema from '../validation/signup-validation';
import SigninSchema from '../validation/signin-validation';
import AuthController from '../controllers/auth-controller';

class AuthRoutes extends BaseRouter {
  routes(): void {
    this.router.post('/signup', validate(SignupSchema), AuthController.signup);
    this.router.post('/signin', validate(SigninSchema), AuthController.signin);
  }
}

export default new AuthRoutes().router;
