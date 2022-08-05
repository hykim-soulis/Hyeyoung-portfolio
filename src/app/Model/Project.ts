export class Project {
  name: string;
  id: number;
  liveLink: string;
  github: string;
  img: string;
  summary: string;
  description: string;
  lessonLearned: string[];

  constructor() {
    this.name = '';
    this.id = 1;
    this.liveLink = '';
    this.github = '';
    this.img = '';
    this.summary = '';
    this.description = '';
    this.lessonLearned = [];
  }
}
