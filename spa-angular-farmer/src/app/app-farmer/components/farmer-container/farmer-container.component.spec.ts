import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmerContainerComponent } from './farmer-container.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CdkTableModule } from '@angular/cdk/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CpfPipe } from '../../pipes/cpf.pipe';
import { FarmerSearchService } from '../../services/farmer.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Farmer } from '../../models/farmer.model';

describe('FarmerContainerComponent', () => {
  let component: FarmerContainerComponent;
  let fixture: ComponentFixture<FarmerContainerComponent>;

  beforeEach(async(() => {
    const farmerSearchServiceStub = {};

    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        MatTableModule,
        MatIconModule,
        CdkTableModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule
      ],
      declarations: [ FarmerContainerComponent, CpfPipe ],
      providers: [
        { provide: FarmerSearchService, useValue: farmerSearchServiceStub },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call function mySelectedFarmer', () => {
    const listFarmer: Farmer[] = [
      {
         "id":"1",
         "name":"Marcos Rodrigues",
         "document":{
            "documentNumber":"98765432193",
            "documentType":"CPF"
         },
         "address":{
            "street":"Rua Manoel Bandeira",
            "state":"São Paulo",
            "address":"Rua Manoel Bandeira, 103, APTO. 10",
            "country":"Brasil"
         }
      }
   ];

    spyOn(component, 'mySelectedFarmer').and.callThrough(); 
    component.mySelectedFarmer(listFarmer);
    expect(component.mySelectedFarmer).toHaveBeenCalled();
  });

  it('call function setErrorService', () => {
    spyOn(component, 'setErrorService').and.callThrough(); 
    component.setErrorService(true);
    expect(component.setErrorService).toHaveBeenCalled();
  });

});
