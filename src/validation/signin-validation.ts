import Joi from 'joi';

const SigninSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export default SigninSchema;
