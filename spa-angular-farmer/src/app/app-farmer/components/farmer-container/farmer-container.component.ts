import { Component } from '@angular/core';
import { Farmer } from '../../models/farmer.model';
import { FarmerSearchService } from '../../services/farmer.service';

@Component({
  selector: 'farmer-container',
  templateUrl: './farmer-container.component.html',
  styleUrls: ['./farmer-container.component.css']
})
export class FarmerContainerComponent { 
 
  private displayedColumns: string[] = ['sender', 'doc', 'address'];
  private listFarmer: Farmer[] = null;
  private errorService = false;

  constructor(private myFarmerSearchProvider: FarmerSearchService) { }

  mySelectedFarmer(listFarmer: Farmer[]) {
    this.listFarmer = listFarmer;
  }

  setErrorService(error: boolean) {
    this.errorService = error;

    if (this.errorService) {
      this.listFarmer = null;
    }
  }
  
}