import { ExamSubjectVm } from "./exam-subject-vm";

export class ExamScheduleStandardVm {
  examScheduleStandardId!: number;
  examScheduleStandardName!: string;
  standardName!: string;
  examScheduleName!: string;
  examSubjects!: ExamSubjectVm[]
}
