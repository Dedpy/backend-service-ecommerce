import { IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  id: number;
  @IsString()
  username: string;
  @IsStrongPassword()
  password: string;
}
