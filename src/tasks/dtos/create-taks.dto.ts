import { IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task-status';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Task title',
    description: 'The title of the task',
    required: true,
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Task description',
    description: 'The description of the task',
    required: true,
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'OPEN',
    description: 'The status of the task',
    enum: TaskStatus,
    required: false,
  })
  status: TaskStatus;
}
