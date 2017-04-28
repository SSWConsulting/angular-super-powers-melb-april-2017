import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from './../../models/appState';
import { HttpModule } from '@angular/http';
import { CompanyService } from './../company.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import 'rxjs/Rx';

import { CompanyListComponent } from './company-list.component';
import { companyReducer } from 'app/reducers/company.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';
import { LOAD_COMPANIES } from '../../reducers/company.reducer';


describe('CompanyListComponent', () => {
    let component: CompanyListComponent;
    let fixture: ComponentFixture<CompanyListComponent>;
    let companyService: CompanyService;
    let store: Store<AppState>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompanyListComponent],
            imports: [
                HttpModule,
                StoreModule.provideStore({ company: companyReducer }),
                NgbModule.forRoot()
            ],
            providers: [
                CompanyService
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CompanyListComponent);
        component = fixture.componentInstance;
        companyService = TestBed.get(CompanyService);
        store = fixture.debugElement.injector.get(Store);
        de = fixture.debugElement;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    fit('should have an array of companies', fakeAsync(() => {
        const fakeCompanies = [{ id: -1, name: 'company 1', email: 'email 1', phone: 123 }];

        spyOn(companyService, 'loadCompanies').and.returnValue(
            Observable.of(fakeCompanies)
        );

        store.dispatch({ type: LOAD_COMPANIES, payload: fakeCompanies });

        // component.companies$ = Observable.of([{ id: -1, name: 'company 1', email: 'email 1', phone: 123 }]);

        // const companies$ = store.select(s => s.companies);
        fixture.detectChanges();
        tick(1000);
        fixture.detectChanges();
        // const list = de.query(By.css('tr'));

        // console.log(list);

        // const companies;
        expect(companyService.loadCompanies).toHaveBeenCalled();
        expect(companyService.loadCompanies).toHaveBeenCalledTimes(1);


        store.select(s => s.companies).subscribe((c) => {
            console.log('store', c);
            // expect(1).toEqual(1);
        });

        component.companies$.subscribe(c => {
            console.log(c);
            // expect(1).toEqual(1);
        });



    }));
});
