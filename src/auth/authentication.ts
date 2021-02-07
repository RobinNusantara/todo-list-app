import {compare} from 'bcryptjs';
import {genSalt, hash} from 'bcryptjs';
import {sign} from 'jsonwebtoken';

class Authentication {
  public static hashedPassword = async (password: string): Promise<string> => {
    const salt = await genSalt(10);
    return await hash(password, salt);
  }

  public static comparePassword = async (password: string, encryptedPassword: string): Promise<boolean> => {
    return await compare(password, encryptedPassword);
  }

  public static generateToken = (id: number, username: string, email: string): string => {
    const secretKey: string = process.env.ACCESS_TOKEN || 'ACCESS_TOKEN';
    const payload: object = {id, username, email};
    const token: string = sign(payload, secretKey);
    return token;
  }
}

export default Authentication;
