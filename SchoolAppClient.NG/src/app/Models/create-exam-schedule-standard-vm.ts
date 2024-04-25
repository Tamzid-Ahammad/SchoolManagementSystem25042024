import { CreateExamSubjectWithScheduleVM } from "./create-exam-subject-with-schedule-vm";

export class CreateExamScheduleStandardVM {
  examScheduleStandardName!: string;
  examScheduleId!: number;
  standardId!: number;
  examSubjects: CreateExamSubjectWithScheduleVM[] = [];
}
