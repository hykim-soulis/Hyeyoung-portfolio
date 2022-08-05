import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnteranceComponent } from './enterance/enterance.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: EnteranceComponent },

  {
    path: 'projects',
    component: ProjectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
