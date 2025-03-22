import { Routes } from '@angular/router';
import { HeaderComponent } from './modules/header/header.component';
import { FormComponent } from './modules/form/form.component';

export const routes: Routes = [ 
    {path:'header', component:HeaderComponent},  
    {path:'form', component:FormComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
