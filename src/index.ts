import express, {Application} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import AuthRoutes from './routes/auth-routes';
import TodoRoutes from './routes/todo-routes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  protected middlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.use('/api/v1/auth', AuthRoutes);
    this.app.use('/api/v1/todos', TodoRoutes);
  }
}

const port: number = 4000;
const app = new App().app;
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
