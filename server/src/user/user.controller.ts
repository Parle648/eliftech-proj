import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { IFilter, UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: any) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(@Query() filters: IFilter) {
    return this.userService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}
