import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FarmerContainerComponent } from './components/farmer-container/farmer-container.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'consult', pathMatch: 'full' },
    { path: 'consult', component: FarmerContainerComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [RouterModule]
})
export class FarmerRoutingModule { }