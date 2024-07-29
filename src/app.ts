import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { errorHandler, notFoundHandler } from './middleware/errorMiddleware';
import routes from './routes';

const app: Application = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  try {
    res.status(200).json('Server is up and running');
  } catch (error: any) {
    res.status(500).json(`Internal Server Error`);
  }
});

app.use('/api', routes);

// Error Handling Moddlewares
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
