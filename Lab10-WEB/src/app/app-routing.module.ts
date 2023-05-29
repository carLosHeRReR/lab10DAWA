import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { FormularioComponent } from './formulario/formulario.component';
import { CrudComponent } from './crud/crud.component';

//RUTAS
const routes: Routes = [
  {path: '', component:FormularioComponent},
  {path: 'CRUD', component:CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
