import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../Model/Project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  dataUrl = '../../assets/projects.json';
  projectList: Project[] = [];
  selectedProject;

  constructor(private http: HttpClient) {
    this.selectedProject = {
      name: '',
      id: 1,
      liveLink: '',
      github: '',
      img: '',
      summary: '',
      description: '',
      lessonLearned: [],
    };
  }

  getProject(): Observable<[]> {
    return this.http.get<[]>(this.dataUrl);
  }
}
