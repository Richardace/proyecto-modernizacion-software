import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AIndexComponent } from './a-index/a-index.component';
// import { PDeleteComponent } from './p-delete/p-delete.component';
// import { PEditComponent } from './p-edit/p-edit.component';
// import { PAddComponent } from './p-add/p-add.component';

const routes: Routes = [
  {path : '', component: AIndexComponent}
  // {path : 'delete/:id', component: PDeleteComponent},
  // {path : 'edit/:id', component: PEditComponent},
  // {path : 'add', component: PAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
