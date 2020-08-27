import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FarmerSearchCardComponent } from './farmer-search-card.component';
import {  FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Farmer } from '../../models/farmer.model';

describe('FarmerSearchCardComponent', () => {
  let component: FarmerSearchCardComponent;
  let fixture: ComponentFixture<FarmerSearchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        BrowserAnimationsModule
      ],
      declarations: [ FarmerSearchCardComponent ],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call function getDetailsFarmers', () => {
    component.formSearch = new FormGroup({
      valueSearch: new FormControl('Teste')
    });
    component.farmerSearchAbstractProvider = {
      searchFarmers(): Promise<Farmer[]> {
        let promise: Promise<Farmer[]> = new Promise((resolve, reject) => {
          resolve();
        });
        return promise; 
      }
    };

    spyOn(component, 'getDetailsFarmers').and.callThrough(); 
    component.getDetailsFarmers();
    expect(component.getDetailsFarmers).toHaveBeenCalled();
  });

});
