import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/Model/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;

  constructor(private projectService: ProjectService) {
    this.project = {
      name: '',
      id: 1,
      liveLink: '',
      github: '',
      img: '',
      summary: '',
      description: '',
      skills: [],
    };
  }

  ngOnInit(): void {}
}
