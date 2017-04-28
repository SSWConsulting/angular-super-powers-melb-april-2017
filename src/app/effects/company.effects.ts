import { Injectable } from '@angular/core';
import { CompanyService } from '../company/company.service';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { LOAD_COMPANIES, LOAD_COMPANIES_SUCCESS, DELETE_COMPANY, DELETE_COMPANY_SUCCESS } from '../reducers/company.reducer';

@Injectable()
export class CompanyEffects {
    constructor(
        private actions$: Actions,
        private companyService: CompanyService
    ) { }

    // tslint:disable-next-line:member-ordering
    @Effect() loadCompanies$ = this.actions$
        .ofType(LOAD_COMPANIES)
        .switchMap(() => {
            return this.companyService.loadCompanies()
                .map(companies => ({ type: LOAD_COMPANIES_SUCCESS, payload: companies }));
        });

    // tslint:disable-next-line:member-ordering
    @Effect() deleteCompany$ = this.actions$
        .ofType(DELETE_COMPANY)
        .switchMap((action) => {
            return this.companyService.deleteCompany(action.payload)
                .map(company => ({ type: DELETE_COMPANY_SUCCESS, payload: company.id }));
        });

};