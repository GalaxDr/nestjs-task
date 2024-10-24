import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskStatusDto {
  @ApiProperty({
    example: 'OPEN',
    description: 'The status of the task',
    enum: TaskStatus,
    required: true,
  })
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
