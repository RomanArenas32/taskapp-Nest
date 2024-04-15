import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {

    constructor(private TaskService: TaskService){

    }

    @Get()
    getAllTask(){
        return this.TaskService.getAllTask()
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDto){
        console.log(newTask)
        return this.TaskService.createTask(newTask.title, newTask.description)
    }

    @Delete(':id')
    deleteTask(@Param('id') id:string){
        this.TaskService.deleteTask(id)
    }

    @Patch(':id')
    updateTask(@Param('id') id:string, @Body() updateField: UpdateTaskDto){
        this.TaskService.updateTask(id, updateField )
    }
}
