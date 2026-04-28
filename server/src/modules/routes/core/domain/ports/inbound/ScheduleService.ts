import { Schedule } from '../../schemas/Schedule';
import {
  CreateScheduleDTO,
  UpdateScheduleDTO,
} from '../../shared/dtos/Schedule.dto';

export interface ScheduleService {
  createSchedule(scheduleData: CreateScheduleDTO): Promise<Schedule>;
  getScheduleById(scheduleId: string): Promise<Schedule | null>;
  updateSchedule(
    scheduleId: string,
    updateData: UpdateScheduleDTO,
  ): Promise<Schedule>;
  deleteSchedule(scheduleId: string): Promise<void>;
  assignScheduleToRoute(
    routeId: string,
    scheduleData: CreateScheduleDTO,
  ): Promise<Schedule>;
  unassignScheduleFromRoute(routeId: string, scheduleId: string): Promise<void>;
}
