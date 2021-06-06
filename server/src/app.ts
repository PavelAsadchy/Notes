import express, { Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';

import { errorLog } from './utils/logger';
import { loggingMiddleware } from './middlewares/logging';
import { errorHandling } from './middlewares/errorHandle';

import userRouter from './resourses/users/user.router';
import categoryRouter from './resourses/categories/category.router';
import noteRouter from './resourses/notes/note.router';

const app = express();

process.on('uncaughtException', (err) => {
  errorLog(err.message);
});

process.on('unhandledRejection', (reason: string, promise: Promise<string>) => {
  promise.catch((error: Error) => {
    const message = `${error.message}, ${reason}`;
    errorLog(message);
  });
});

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(loggingMiddleware);

app.use('/users', userRouter);
app.use('/categories', categoryRouter);
categoryRouter.use('/:categoryId/notes', noteRouter);

app.use(errorHandling);

export default app;
