import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthSignDto } from 'src/dto/AuthSign.dto';
import { User } from 'src/entities/User.entity';
import { UserService } from 'src/services/User.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  signup(@Body() dto: AuthSignDto): Promise<User> {
    return this.userService.signup(dto);
  }

  @Get()
  signin(@Query() query: AuthSignDto): Promise<User> {
    return this.userService.signing(query);
  }
}
