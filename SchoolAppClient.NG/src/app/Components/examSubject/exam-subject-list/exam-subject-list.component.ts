import { Component } from '@angular/core';
import { ExamSubject } from '../../../Models/exam-subject';
import { Subject } from 'rxjs';
import { ExamSubjectService } from '../../../Services/exam-subject.service';

@Component({
  selector: 'app-exam-subject-list',
  templateUrl: './exam-subject-list.component.html',
  styleUrl: './exam-subject-list.component.css'
})
export class ExamSubjectListComponent {
  public examsubjects: ExamSubject[]=[];
  constructor(private service: ExamSubjectService) { }
  ngOnInit(): void {
    this.LoadData();

  }

  LoadData() {
    this.service.GetExamSubjects().subscribe((response: ExamSubject[]) => {
      this.examsubjects = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }




  DeleteExamSubject(examsub: ExamSubject) {
    let confirmDelete: boolean = confirm(`Delete ${examsub.subject.subjectName}?`);
    if (confirmDelete) {
      this.service.DeleteExamSubjects(examsub.examSubjectId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }








}
