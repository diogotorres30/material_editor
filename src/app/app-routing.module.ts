import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProjectsComponent} from './projects/projects.component';
import {HomeComponent} from './home/home.component';
import {EditorComponent} from './editor/editor.component';
import {RepositoryComponent} from './repository/repository.component';
// import {RelatoriosTableComponent} from './repository/relatorios-table/relatorios-table.component';

const routes: Routes =
  [
    {path: '', component: HomeComponent},
    {path: 'editor', component: EditorComponent},
    {path: 'repository', component: RepositoryComponent},
    // {path: 'reports', component: RelatoriosTableComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
