import { Controller, Get, Param, Query } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('/event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('/pages/:number')
  findAll(@Param('number') param: string, @Query() sortBy: {name: string, value: boolean}) {
    return this.eventService.findAll(+param, sortBy);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }
}
