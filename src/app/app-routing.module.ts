import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProjectsComponent} from './projects/projects.component';
import {HomeComponent} from './home/home.component';
import {EditorComponent} from './editor/editor.component';

const routes: Routes =
  [
    {path: '', component: HomeComponent},
    {path: 'editor', component: EditorComponent},
    {path: 'repository', component: ProjectsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
