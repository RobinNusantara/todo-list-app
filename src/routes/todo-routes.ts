import BaseRouter from '../utils/router-base';
import authentication from '../middlewares/auth-middleware';
import validate from '../middlewares/validate-middleware';
import TodoSchema from '../validation/todo-validation';
import TodoController from '../controllers/todo-controller';

class TodoRoutes extends BaseRouter {
  routes(): void {
    this.router.get('/list/all', authentication, TodoController.index);
    this.router.post('/insert', validate(TodoSchema), TodoController.insert);
    this.router.get('/details/:id', authentication, TodoController.select);
    this.router.patch('/update/:id', authentication, TodoController.update);
    this.router.delete('/remove/:id', authentication, TodoController.remove);
  }
}

export default new TodoRoutes().router;
