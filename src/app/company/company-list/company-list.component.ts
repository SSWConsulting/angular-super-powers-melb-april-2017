import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import { AppState } from '../../models/appState';
import { LOAD_COMPANIES } from '../../reducers/company.reducer';


@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyListComponent implements OnInit {
  companies$: Observable<Company[]>;

  constructor(
    private store: Store<AppState>,
    private companyService: CompanyService) {
      this.companies$ = this.store.select(s => s.companies);
     }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    // this.companies$ = this.companyService.getCompanies().delay(2000);
    this.companyService.loadCompanies();
  }

}
