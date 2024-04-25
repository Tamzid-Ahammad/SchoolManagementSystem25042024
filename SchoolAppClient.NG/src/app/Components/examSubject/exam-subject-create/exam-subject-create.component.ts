import { Component, OnInit } from '@angular/core';
import { ExamSubject } from '../../../Models/exam-subject';
import { ExamScheduleStandard } from '../../../Models/exam-schedule-standard';
import { Examtype } from '../../../Models/examtype';
import { Subject } from '../../../Models/subject';
import { CreateExamSubjectVM } from '../../../Models/create-exam-subject-vm';
import { ExamScheduleStandardService } from '../../../Services/exam-schedule-standard.service';
import { ExamtypeService } from '../../../Services/examtype.service';
import { SubjectService } from '../../../Services/subject.service';
import { ExamSubjectService } from '../../../Services/exam-subject.service';
import { Router } from '@angular/router';
import { ExamSchedule } from '../../../Models/exam-schedule';
import { ExamScheduleStandardVm } from '../../../Models/exam-schedule-standard-vm';

@Component({
  selector: 'app-exam-subject-create',
  templateUrl: './exam-subject-create.component.html',
  styleUrl: './exam-subject-create.component.css'
})
export class ExamSubjectCreateComponent implements OnInit{
  public model !: CreateExamSubjectVM;
  public examScheduledStandardList: ExamScheduleStandardVm[] = [];
  public examTypeList: Examtype[] = [];
  public subjectList: Subject[] = [];


  constructor(private examScheduledStandardService: ExamScheduleStandardService, private examtypeService: ExamtypeService, private subjectService: SubjectService, private examSubjectService: ExamSubjectService, private router: Router) { }

  ngOnInit(): void {
    this.LoadSubjects();
    
    this.LoadExamType();
    this.LoadExamScheduledStandard();
    this.model = new CreateExamSubjectVM();
  }

  LoadSubjects() {
    this.subjectService.GetSubjects().subscribe((data: Subject[]) => {
      this.subjectList = data;
      console.log(data);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  LoadExamType() {
    this.examtypeService.GetdbsExamType().subscribe((data: Examtype[]) => {
      this.examTypeList = data;
      console.log(data);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
  LoadExamScheduledStandard() {
    this.examScheduledStandardService.GetExamScheduleStandards().subscribe((data: ExamScheduleStandardVm[]) => {
      this.examScheduledStandardList = data;
      console.log(data);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  OnSubmit() {
    this.examSubjectService.SaveExamSubjects(this.model).subscribe
      ({
        next: () => {
          this.router.navigate(['/examSubject']);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }










}
