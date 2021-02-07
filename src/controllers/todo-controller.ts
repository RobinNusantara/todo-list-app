import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';
import {getParamsId} from '../utils/utils';

const prisma = new PrismaClient();

async function index(req: Request, res: Response) {
  try {
    const todos = await prisma.todo.findMany({orderBy: {createdAt: 'desc'}});

    res.status(200).json({
      status: 'ok',
      message: 'Successful fetch todos',
      results: todos,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
}

async function insert(req: Request, res: Response) {
  try {
    const {title, description, timeEnd} = req.body;
    const date = new Date();

    const todo = await prisma.todo.create({
      data: {
        title,
        description,
        timeStart: date,
        timeEnd,
      },
    });

    res.status(201).json({
      status: 'ok',
      message: 'Successful create todo',
      results: todo,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
}

async function select(req: Request, res: Response) {
  try {
    const id: number = getParamsId(req);

    const todo = await prisma.todo.findUnique({where: {id}});

    res.status(200).json({
      status: 'ok',
      message: 'Successful fetch todo',
      results: todo,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
}

async function update(req: Request, res: Response) {
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

    res.status(200).json({
      status: 'ok',
      message: 'Successful update todo',
      results: todo,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id: number = getParamsId(req);

    const todo = await prisma.todo.delete({where: {id}});

    res.status(200).json({
      status: 'ok',
      message: 'Successful remove todo',
      results: todo,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
}

export {index, insert, select, update, remove};
