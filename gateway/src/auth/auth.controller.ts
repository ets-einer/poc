import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

export class SignUpRequest {
  email: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello() {
    return this.authService.getHello();
  }

  @Post('signup')
  signUp(@Body() signUpRequest: SignUpRequest) {
    return this.authService.signUp(signUpRequest);
  }
}
