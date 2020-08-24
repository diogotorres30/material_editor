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
import {NewProjectComponent} from './projects/new-project/new-project.component';
import {GraphQLModule} from './graphql.module';
import {ProjectTableComponent} from './projects/project-table/project-table.component';
import {ProjectFormOptionsService} from './shared/projectForm-options.service';
import {DatePipe} from '@angular/common';
import {HeaderComponent} from './editor/header/header.component';
import {FooterComponent} from './editor/footer/footer.component';
import {NewClientComponent} from './repository/new-client/new-client.component';
import {RepositoryComponent} from './repository/repository.component';
import {ClientsTableComponent} from './repository/clients-table/clients-table.component';
import {UsersTableComponent} from './repository/users-table/users-table.component';
import {NewUserComponent} from './repository/new-user/new-user.component';
import {RelatoriosTableComponent} from './repository/relatorios-table/relatorios-table.component';
import {NewRelatorioComponent} from './repository/new-relatorio/new-relatorio.component';
import {CoverComponent} from './editor/cover/cover.component';
import {SafePipe} from './safe.pipe';
import {DocManagementComponent} from './editor/doc-management/doc-management.component';
import {VersionComponent} from './editor/version/version.component';
import {AssessmentScopeComponent} from './editor/assessment-scope/assessment-scope.component';
import { TechnicalDetailsComponent } from './editor/technical-details/technical-details.component';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    AppComponent,
    HomeComponent,
    EditorComponent,
    ProjectsComponent,
    NewProjectComponent,
    NewRelatorioComponent,
    ProjectTableComponent,
    HeaderComponent,
    FooterComponent,
    NewClientComponent,
    RepositoryComponent,
    ClientsTableComponent,
    UsersTableComponent,
    NewUserComponent,
    RelatoriosTableComponent,
    CoverComponent,
    SafePipe,
    DocManagementComponent,
    VersionComponent,
    AssessmentScopeComponent,
    TechnicalDetailsComponent],
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
    FormsModule,
  ],
  providers: [ProjectFormService, ProjectFormOptionsService, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [
    NewProjectComponent,
    NewRelatorioComponent,
    NewClientComponent,
    NewUserComponent,
    CoverComponent,
    DocManagementComponent,
    VersionComponent,
    AssessmentScopeComponent,
    TechnicalDetailsComponent,
    HomeComponent
  ]
})
export class AppModule {
}
