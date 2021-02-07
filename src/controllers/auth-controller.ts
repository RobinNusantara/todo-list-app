import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';
import AuthenticationController from '../auth/auth-controller-interface';
import Authentication from '../auth/authentication';

const prisma = new PrismaClient();

class AuthController implements AuthenticationController {
  signup = async (req: Request, res: Response): Promise<Response> => {
    try {
      const {username, email, password} = req.body;

      const isUsernameTaken = await prisma.user.findUnique({where: {username}});

      if (isUsernameTaken) {
        return res.status(400).json({
          status: 'error',
          message: 'username already taken',
        });
      }

      const isEmailTaken = await prisma.user.findUnique({where: {email}});

      if (isEmailTaken) {
        return res.status(400).json({
          status: 'error',
          message: 'email already taken',
        });
      }

      const hashPassword = await Authentication.hashedPassword(password);

      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hashPassword,
        },
      });

      const token = Authentication.generateToken(user.id, user.username, user.email);

      return res.status(201).json({
        status: 'ok',
        message: 'Successful create an account',
        token,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }

  signin = async (req: Request, res: Response): Promise<Response> => {
    try {
      const {email, password} = req.body;

      const user = await prisma.user.findUnique({where: {email}});

      if (!user) {
        return res.status(400).json({
          status: 'error',
          message: 'email or password is incorrect',
        });
      }

      const isPasswordValid = await Authentication.comparePassword(password, user!.password);

      if (!isPasswordValid) {
        return res.status(400).json({
          status: 'error',
          message: 'email or password is incorrect',
        });
      }

      const token = Authentication.generateToken(user.id, user.username, user.email);

      return res.status(201).json({
        status: 'ok',
        message: 'Successful login',
        token,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'error',
        message: error.message,
      });
    }
  }
}

export default new AuthController();
