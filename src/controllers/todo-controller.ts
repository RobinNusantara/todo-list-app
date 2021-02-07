import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';
import {getParamsId} from '../utils/utils';
import Controller from '../utils/controller-interface';

const prisma = new PrismaClient();

class TodoController implements Controller {
  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const {id} = req.app.locals.user;

      const todos = await prisma.todo.findMany({
        where: {ownerId: id},
        orderBy: {createdAt: 'desc'},
      });

      return res.status(200).json({
        status: 'ok',
        message: 'Successful fetch todos',
        results: todos,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  insert = async (req: Request, res: Response): Promise<Response> => {
    try {
      const {title, description, timeEnd} = req.body;
      const date = new Date();

      const todo = await prisma.todo.create({
        data: {
          ownerId: 1,
          title,
          description,
          timeStart: date,
          timeEnd,
        },
      });

      return res.status(201).json({
        status: 'ok',
        message: 'Successful create todo',
        results: todo,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  select = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id: number = getParamsId(req);

      const todo = await prisma.todo.findUnique({where: {id}});

      return res.status(200).json({
        status: 'ok',
        message: 'Successful fetch todo',
        results: todo,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id: number = getParamsId(req);
      const {title, description, isComplete, timeStart, timeEnd} = req.body;
      const date = new Date();

      const todo = await prisma.todo.update({
        where: {id},
        data: {
          title,
          description,
          isComplete,
          timeStart,
          timeEnd,
          updatedAt: date,
        },
      });

      return res.status(200).json({
        status: 'ok',
        message: 'Successful update todo',
        results: todo,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  remove = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id: number = getParamsId(req);

      const todo = await prisma.todo.delete({where: {id}});

      return res.status(200).json({
        status: 'ok',
        message: 'Successful remove todo',
        results: todo,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}

export default new TodoController();
