import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamSubject } from '../Models/exam-subject';

@Injectable({
  providedIn: 'root'
})
export class ExamSubjectService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }

  httpFormOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',

    })
  }

  apiUrl: string = "https://localhost:7225/api/ExamSubjects";

  public GetExamSubjects(): Observable<ExamSubject[]> {

    return this.http.get<ExamSubject[]>(this.apiUrl);
  }
  public GetExamSubjectsbyID(id: number): Observable<ExamSubject> {

    return this.http.get<ExamSubject>(this.apiUrl + '/' + id);
  }
  public SaveExamSubjects(examSubject: any): Observable<any> {

    return this.http.post(this.apiUrl, examSubject, this.httpOptions);
  }

  public UpdateExamSubjects(examSubject: ExamSubject): Observable<ExamSubject> {

    return this.http.put<ExamSubject>(this.apiUrl + '/' + examSubject.examSubjectId, examSubject, this.httpOptions);
  }
  public DeleteExamSubjects(id: number): Observable<any> {

    return this.http.delete(this.apiUrl + '/' + id);
  }







}
