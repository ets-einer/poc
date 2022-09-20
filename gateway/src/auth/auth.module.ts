import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientsModule, Transport } from "@nestjs/microservices"

@Module({
  imports: [
    ClientsModule.register([
      { name: "AUTH", transport: Transport.TCP, options: { port: 5000 } }
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
