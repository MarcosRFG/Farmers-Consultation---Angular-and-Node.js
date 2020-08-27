import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './app-farmer.routing';
import { CpfPipe } from './pipes/cpf.pipe';
import { FarmerSearchCardComponent } from './components/farmer-search-card/farmer-search-card.component';
import { FarmerSearchService } from './services/farmer.service';
import { FarmerContainerComponent } from './components/farmer-container/farmer-container.component';
import { AppFarmerComponent } from './app-farmer.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CdkTableModule } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    FarmerRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    CdkTableModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [
    AppFarmerComponent,
    FarmerSearchCardComponent,
    FarmerContainerComponent,
    CpfPipe
  ],
  providers: [
    FarmerSearchService
  ],
})
export class FarmerModule { }
