import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notebook } from '../Notebook';

@Injectable({
  providedIn: 'root',
})
export class NotebookService {
  baseApiUrl: string = 'http://localhost:3000/notebooks';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Notebook[]>{
    return this.http.get<Notebook[]>(this.baseApiUrl);
  }
}
