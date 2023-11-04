import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { username, password } = createUserDto;

    const user = await this.userRepository.findOneBy({ username });
    if (user) {
      return { message: 'User already exists' };
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const userx = new User();
    userx.username = username;
    userx.password = hashedPassword;
    return this.userRepository.save(userx);
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.find({});
    } catch (err) {
      return err;
    }
  }

  async findOne(id: number): Promise<User> {
    try {
      return await this.userRepository.findOneBy({ id });
    } catch (err) {
      return err;
    }
  }
  async findOneByUsername(username: string): Promise<User> {
    try {
      return await this.userRepository.findOneBy({ username });
    } catch (err) {
      return err;
    }
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User | undefined> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      return undefined;
    }
    this.userRepository.merge(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
