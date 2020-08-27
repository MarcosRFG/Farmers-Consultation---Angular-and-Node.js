import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: '', redirectTo: 'farmer/consult', pathMatch: 'full' },
    { path: 'farmer', loadChildren: () => import('./app-farmer/app-farmer.module').then(m => m.FarmerModule) },
    { path: '**', redirectTo: '/farmer/consult', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }