import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies: { id: number; name: string; email: string; phone: number; }[];

  constructor() { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    return this.companies = [
      {id: -1, name: 'company 1', email: 'email1', phone: 123},
      {id: -2, name: 'company 2', email: 'email2', phone: 123},
    ];
  }

}
