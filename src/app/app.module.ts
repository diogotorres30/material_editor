import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {HomeComponent} from './home/home.component';
import {ProjectFormService} from './shared/projectForm.service';
import {EditorComponent} from './editor/editor.component';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import {ProjectsComponent} from './projects/projects.component';
import {NewProjectComponent} from './projects/newProject/newProject.component';
import {GraphQLModule} from './graphql.module';
import {ProjectTableComponent} from './projects/project-table/project-table.component';
import {FormOptionsService} from "./shared/form-options.service";
import {UpdateProjectComponent} from './projects/update-project/update-project.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, EditorComponent, ProjectsComponent, NewProjectComponent, ProjectTableComponent, UpdateProjectComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    MatTreeModule,
    GraphQLModule,
    FormsModule
  ],
  providers: [ProjectFormService, FormOptionsService],
  bootstrap: [AppComponent],
  entryComponents: [NewProjectComponent]
})
export class AppModule {
}
