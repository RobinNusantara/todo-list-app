import BaseRouter from '../utils/router-base';
import validate from '../middlewares/validate-middleware';
import TodoSchema from '../validation/todo-validation';
import * as controller from '../controllers/todo-controller';

class TodoRoutes extends BaseRouter {
  routes(): void {
    this.router.get('/list/all', controller.index);
    this.router.post('/insert', validate(TodoSchema), controller.insert);
  }
}

export default new TodoRoutes().router;
