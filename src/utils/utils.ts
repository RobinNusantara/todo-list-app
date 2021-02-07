import {Request} from 'express';

export function getParamsId(req: Request): number {
  const id: string = req.params.id;
  return Number(id);
}
