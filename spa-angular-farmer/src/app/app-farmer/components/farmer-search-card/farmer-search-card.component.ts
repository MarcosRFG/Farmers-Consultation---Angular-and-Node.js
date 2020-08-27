import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { FarmerSearchAbstractProvider } from '../../services/farmer.service';
import { SearchParams, Farmer } from '../../models/farmer.model';

@Component({
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent  {

  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() onFarmerSelectedEvent = new EventEmitter();
  @Output() onErrorService = new EventEmitter();

  formSearch: FormGroup;

  constructor() { 
    this.formSearch = new FormGroup({
      valueSearch: new FormControl('', Validators.required)
    });
  }

  getDetailsFarmers(): void {
    const valueForm: string = this.formSearch.get('valueSearch').value;

    if (valueForm) {    
      const valueFormFormatted = valueForm.replace(/\./g,'').replace(/\-/g,'').trim();
      const searchRequest: SearchParams = new SearchParams(valueFormFormatted);

      this.farmerSearchAbstractProvider.searchFarmers(searchRequest)
      .then((res: Farmer[]) => {
        this.onFarmerSelectedEvent.emit(res);
        this.onErrorService.emit(false);
      })
      .catch((err: any) => {
        this.onErrorService.emit(true);
      });
    }
  }

}
