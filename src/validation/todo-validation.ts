import Joi from 'joi';

const TodoSchema = Joi.object({
  title: Joi.string().max(30).required(),
  description: Joi.string().max(150).required(),
  timeStart: Joi.date(),
  timeEnd: Joi.date(),
});

export default TodoSchema;
