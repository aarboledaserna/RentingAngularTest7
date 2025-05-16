import { Routes } from '@angular/router';

import { InicioComponent } from '../app/Pages/inicio/inicio.component';
import { EmpleadoComponent } from './Pages/empleado/empleado.component';

export const routes: Routes = [
    {path: '', component:InicioComponent},
    {path: 'Inicio',component:InicioComponent},
    {path: 'Empleado/:id',component: EmpleadoComponent},
];
