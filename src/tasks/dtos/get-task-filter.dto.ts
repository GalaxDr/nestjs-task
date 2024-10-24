import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-status';
import { ApiProperty } from '@nestjs/swagger';

export class GetTaskFilterDto {
  @ApiProperty({
    example: 'OPEN',
    description: 'The status of the task',
    enum: TaskStatus,
    required: false,
  })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiProperty({
    example: 'Task title',
    description: 'The title of the task',
    required: false,
  })
  @IsOptional()
  @IsString()
  search?: string;
}
