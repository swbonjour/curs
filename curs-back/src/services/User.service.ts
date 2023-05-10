import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/User.entity';
import { AuthSignDto } from 'src/dto/AuthSign.dto';
import { InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async signup(singDto: AuthSignDto): Promise<User> {
    const { username, password } = singDto;

    try {
      const userExists = await this.userRepository.findOne({
        where: {
          name: username,
        },
      });

      if (userExists) {
        throw new InternalServerErrorException();
      }
    } catch (error) {
      throw new InternalServerErrorException();
    }

    const user = new User();
    user.name = username;
    user.password = password;

    try {
      const createdUser = await this.userRepository.save(user);
      return createdUser;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async signing(signDto: AuthSignDto): Promise<User> {
    const { username, password } = signDto;

    try {
      const user = await this.userRepository.findOne({
        where: {
          name: username,
          password: password,
        },
      });
      if (user) {
        return user;
      } else {
        throw new InternalServerErrorException();
      }
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
