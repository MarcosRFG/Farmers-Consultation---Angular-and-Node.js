import { TestBed } from '@angular/core/testing';
import { FarmerSearchService } from './farmer.service';
import { HttpClient } from '@angular/common/http';
import { SearchParams } from '../models/farmer.model';

describe('FarmerSearchService', () => {
  let service: FarmerSearchService;

    beforeEach(() => {
        const httpClientStub = {
            get: (url) => ({ toPromise: () => ({ }) })
        };

        TestBed.configureTestingModule({
        providers: [
            FarmerSearchService,
            { provide: HttpClient, useValue: httpClientStub }
        ]
        });
        service = TestBed.get(FarmerSearchService);
    });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('call function searchFarmers', () => {
    const searchRequest: SearchParams = new SearchParams('João');

    spyOn(service, 'searchFarmers').and.callThrough(); 
    service.searchFarmers(searchRequest);
    expect(service.searchFarmers).toHaveBeenCalled();
  });

});
