import { Inject, Injectable } from '@nestjs/common';
import { SignUpRequest } from './auth.controller';
import { ClientProxy } from "@nestjs/microservices"

@Injectable()
export class AuthService {
  constructor(@Inject("AUTH") private readonly authClient: ClientProxy) {}
  getHello() {
    return {message: 'maokonha'};
  }

  signUp(signUpRequest: SignUpRequest) {
    console.table(signUpRequest)
    return this.authClient.send({ cmd: "create_user" }, signUpRequest)
  }
}
