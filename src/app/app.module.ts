import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { ProjectService } from './shared/project.service';
import { EditorComponent } from './editor/editor.component';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';

@NgModule({
	declarations: [ AppComponent, HomeComponent, EditorComponent, ProjectsComponent, ProjectComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule,
		QuillModule.forRoot(),
		ReactiveFormsModule,
		MatTreeModule,
		NgxDatatableModule
	],
	providers: [ ProjectService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
