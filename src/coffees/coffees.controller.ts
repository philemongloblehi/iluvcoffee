import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {CoffeesService} from "./coffees.service";
import {Coffee} from "./entities/coffee.entity";

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeesService: CoffeesService) {}

    @Get()
    findAll(@Query() paginationQuery): Coffee[]
    {
        // const {limit, offset} = paginationQuery;
        return this.coffeesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Coffee {
        // return `This action #${id} coffee`;
        return this.coffeesService.findOne(id);
    }

    @Post()
    create(@Body() body: string): any
    {
        return this.coffeesService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: string): void
    {
        // return `This action updates #${id} coffee`;
        return this.coffeesService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string): void {
        // return `This action removes #${id} coffee`;
        return this.coffeesService.remove(id);
    }
}
