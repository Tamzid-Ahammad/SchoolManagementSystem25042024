import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarksListComponent } from './Components/marks/marks-list/marks-list.component';
import { MarksAddComponent } from './Components/marks/marks-add/marks-add.component';
import { MarksEditComponent } from './Components/marks/marks-edit/marks-edit.component';
import { MarksDeleteComponent } from './Components/marks/marks-delete/marks-delete.component';
import { AttendanceListComponent } from './Components/attendance/attendance-list/attendance-list.component';
import { AttendanceAddComponent } from './Components/attendance/attendance-add/attendance-add.component';
import { FeetypeListComponent } from './Components/feetype/feetype-list/feetype-list.component';
import { FeetypeEditComponent } from './Components/feetype/feetype-edit/feetype-edit.component';
import { FeetypeCreateComponent } from './Components/feetype/feetype-create/feetype-create.component';
import { FeeListComponent } from './Components/fee/fee-list/fee-list.component';
import { FeeCreateComponent } from './Components/fee/fee-create/fee-create.component';
import { FeeEditComponent } from './Components/fee/fee-edit/fee-edit.component';
import { MonthlypaymentListComponent } from './Components/monthlypayment/monthlypayment-list/monthlypayment-list.component';
import { MonthlypaymentEditComponent } from './Components/monthlypayment/monthlypayment-edit/monthlypayment-edit.component';
import { MonthlypaymentCreatComponent } from './Components/monthlypayment/monthlypayment-create/monthlypayment-create.component';
import { MonthlypaymentDetailsComponent } from './Components/monthlypayment/monthlypayment-details/monthlypayment-details.component';
import { StaffListComponent } from './Components/staff/staff-list/staff-list.component';
import { ExamtypeListComponent } from './Components/examtype/examtype-list/examtype-list.component';
import { ExamtypeAddComponent } from './Components/examtype/examtype-add/examtype-add.component';
import { ExamtypeEditComponent } from './Components/examtype/examtype-edit/examtype-edit.component';
import { ExamscheduleListComponent } from './Components/examschedule/examschedule-list/examschedule-list.component';
import { ExamscheduleAddComponent } from './Components/examschedule/examschedule-add/examschedule-add.component';
import { ExamscheduleEditComponent } from './Components/examschedule/examschedule-edit/examschedule-edit.component';
import { ExamScheduleStandardsListComponent } from './Components/ExamScheduleStandards/exam-schedule-standards-list/exam-schedule-standards-list.component';
import { ExamScheduleStandardsCreateComponent } from './Components/ExamScheduleStandards/exam-schedule-standards-create/exam-schedule-standards-create.component';
import { ExamScheduleStandardsEditComponent } from './Components/ExamScheduleStandards/exam-schedule-standards-edit/exam-schedule-standards-edit.component';
import { ExamSubjectListComponent } from './Components/examSubject/exam-subject-list/exam-subject-list.component';
import { ExamSubjectCreateComponent } from './Components/examSubject/exam-subject-create/exam-subject-create.component';
import { ExamSubjectEditComponent } from './Components/examSubject/exam-subject-edit/exam-subject-edit.component';

const routes: Routes = [
  { path: "", redirectTo: "/marksList", pathMatch: "full" },
  /*{ path: "", redirectTo: "/attendanceList", pathMatch: "full" },*/
  { path: "marksList", component: MarksListComponent },
  { path: 'marks/add', component: MarksAddComponent },
  { path: 'marks/edit/:id', component: MarksEditComponent },
  { path: "marks/delete/:id", component: MarksDeleteComponent },
  { path: "attendanceList", component: AttendanceListComponent },
  { path: "attendance/add", component: AttendanceAddComponent },
  { path: 'fee-types', component: FeetypeListComponent },
  { path: 'fee-types/create', component: FeetypeCreateComponent },
  { path: 'fee-types/:id/edit', component: FeetypeEditComponent },

  { path: 'fees', component: FeeListComponent },
  { path: 'fees/create', component: FeeCreateComponent },
  { path: 'fees/:id/edit', component: FeeEditComponent },

  { path: 'monthlypayment', component: MonthlypaymentListComponent },
  { path: 'monthlypayment/create', component: MonthlypaymentCreatComponent },
  { path: 'monthlypayment/:id/edit', component: MonthlypaymentEditComponent },
  { path: 'monthlypayment/:id/details', component: MonthlypaymentDetailsComponent },
  { path: 'staff-list', component: StaffListComponent },

  { path: 'exam-types', component: ExamtypeListComponent },
  { path: 'examType/create',component:ExamtypeAddComponent},
  { path: "examType/edit/:id", component: ExamtypeEditComponent },

  { path:'examSchedule',component:ExamscheduleListComponent},
  { path: 'examSchedule/create', component: ExamscheduleAddComponent },
  { path: "examSchedule/edit/:id", component: ExamscheduleEditComponent },

  { path: "examScheduleStandard", component: ExamScheduleStandardsListComponent },
  { path: "examScheduleStandard/create", component: ExamScheduleStandardsCreateComponent },
  { path: "examScheduleStandard/edit/:id", component: ExamScheduleStandardsEditComponent },

  { path: "examSubject", component: ExamSubjectListComponent },
  { path: "examSubject/create", component: ExamSubjectCreateComponent },
  { path: "examSubject/edit/:id", component: ExamSubjectEditComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
