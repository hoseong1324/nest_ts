import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { getDefaultAutoSelectFamily } from 'net';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return "this will return all movies";
    }

    @Get("/:id")
    getOne(@Param('id') id: string){
        return `this will return one movies with the id : ${id}`;
    }

    @Post()
    create(){
        return 'this will create a moive';
    }

    @Delete("/:id")
    remove(@Param('id') id : string){
        return `this will delete a movie with the id : ${id}`;
    }

    @Patch("/:id")
    patch(@Param('id') id : string){
        return `this will patch a movie with the id : ${id}`;
    }
}
