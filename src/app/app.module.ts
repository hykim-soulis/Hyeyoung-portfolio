import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EnteranceComponent } from './enterance/enterance.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './projects/project.service';
import { ProjectItemComponent } from './projects/project-item/project-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EnteranceComponent,
    ProjectsComponent,
    ProjectItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
