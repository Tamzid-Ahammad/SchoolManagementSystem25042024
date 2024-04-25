import { Time } from "@angular/common";

export class CreateExamSubjectWithScheduleVM {
  subjectId!: number;
  examTypeId!: number;
  examDate: Date = new Date();
  examStartTime !: Date;
  examEndTime !: Date;

}
