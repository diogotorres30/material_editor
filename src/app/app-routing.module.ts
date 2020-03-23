import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [ { path: '', component: ProjectsComponent }, { path: 'editor', component: EditorComponent } ];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
