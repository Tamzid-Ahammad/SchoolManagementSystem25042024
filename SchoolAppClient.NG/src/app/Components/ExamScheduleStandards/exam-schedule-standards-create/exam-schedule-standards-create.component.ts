import { Component, OnInit } from '@angular/core';
import { ExamSchedule } from '../../../Models/exam-schedule';
import { Standard } from '../../../Models/standard';
import { ExamScheduleStandard } from '../../../Models/exam-schedule-standard';
import { ExamScheduleService } from '../../../Services/exam-schedule.service';
import { StandardService } from '../../../Services/standard.service';
import { SubjectService } from '../../../Services/subject.service';
import { ExamScheduleStandardService } from '../../../Services/exam-schedule-standard.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { ExamSubject } from '../../../Models/exam-subject';
import { GetExamScheduleOptionsResponse } from '../../../Models/get-exam-schedule-options-response';
import { Subject } from '../../../Models/subject';
import { Examtype } from '../../../Models/examtype';
import { CreateExamScheduleStandardVM } from '../../../Models/create-exam-schedule-standard-vm';
import { ExamtypeService } from '../../../Services/examtype.service';

@Component({
  selector: 'app-exam-schedule-standards-create',
  templateUrl: './exam-schedule-standards-create.component.html',
  styleUrl: './exam-schedule-standards-create.component.css'
})
export class ExamScheduleStandardsCreateComponent implements OnInit {

  public examScheduleList: GetExamScheduleOptionsResponse[] = [];
  public standardList: Standard[] = [];
  public subjectList: Subject[] = [];
  public examTypeList: Examtype[] = [];
  public model!: CreateExamScheduleStandardVM;
  constructor(
    private examScheduleService: ExamScheduleService,
    private examTypeService: ExamtypeService,
    private standardService: StandardService,
    private subjectService: SubjectService,
    private examScheduleStandardsService: ExamScheduleStandardService,
    private router: Router) { }

  ngOnInit(): void {
    this.LoadExamSchedules();
    this.LoadStandards();
    this.LoadSubjects();
    this.LoadExamTypes();
    this.model = new CreateExamScheduleStandardVM();
  }

  OnSubmit() {
    this.examScheduleStandardsService.SaveExamScheduleStandards(this.model).subscribe({
      next: () => {
        this.router.navigate(['/examScheduleStandard']);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  LoadExamSchedules() {
    this.examScheduleService.GetExamScheduleOptions().subscribe((data: GetExamScheduleOptionsResponse[]) => {
      this.examScheduleList = data;
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  LoadStandards() {
    this.standardService.GetStandards().subscribe((data: Standard[]) => {
      this.standardList = data;
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  LoadSubjects() {
    this.subjectService.GetSubjects().subscribe((data: Subject[]) => {
      this.subjectList = data;
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  LoadExamTypes() {
    this.examTypeService.GetdbsExamType().subscribe((data: Examtype[]) => {
      this.examTypeList = data;
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }


  AddExamSubject() {
    this.model.examSubjects.push({
      subjectId: 0,
      examTypeId: 0,
      examDate: new Date(),
      examStartTime: new Date(),
      examEndTime: new Date()
    })
  }

  DeleteExamSubject(index: number) {
    this.model.examSubjects.splice(index, 1);
  }




}
