/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import '@shared/typeorm';
import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import 'express-async-errors'

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }


    return response.status(500).json({
      status: 'error',
      message: 'Erro Interno no Servidor',
    });
  },
);

app.listen(3333, () => {
  console.log('Servidor Online na porta 3333');
});
