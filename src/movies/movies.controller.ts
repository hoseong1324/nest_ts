import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { getDefaultAutoSelectFamily } from 'net';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return "this will return all movies";
    }

    @Get("search")
    getSearch(@Query('year') year : string ){
        return `We are search for a movie made after : ${year}`;
    }

    @Get("/:id")
    getOne(@Param('id') id: string){
        return `this will return one movies with the id : ${id}`;
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        return movieData;
    }

    @Delete("/:id")
    remove(@Param('id') id : string){
        return `this will delete a movie with the id : ${id}`;
    }

    @Patch("/:id")
    patch(@Param('id') id : string, @Body() updateData){
        return {
            updatedMovie: id,
            updateData,
        };
    }
}
