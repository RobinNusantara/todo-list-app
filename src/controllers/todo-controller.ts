import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function index(req: Request, res: Response) {
  try {
    const todos = await prisma.todo.findMany();

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

function update(req: Request, res: Response) {

}

function remove(req: Request, res: Response) {

}

export {index, insert, update, remove};
