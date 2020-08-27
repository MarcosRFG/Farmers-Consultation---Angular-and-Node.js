import { Farmer, SearchParams } from '../models/farmer.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';

export declare abstract class FarmerSearchAbstractProvider {
    abstract searchFarmers(params: SearchParams): Promise<Farmer[]>;
}

@Injectable()
export class FarmerSearchService {

    constructor(private http: HttpClient) { }
    
    searchFarmers(searchReq: SearchParams): Promise<HttpEvent<Farmer[]>> {
        const parameters: any = {
            params: {
                search: searchReq.search
            }
        };
        const urlAPI = 'http://localhost:3000/get-farmer-search';

        return this.http.get<Farmer[]>(urlAPI, parameters).toPromise();
    }

}