import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-accounts-app',
  templateUrl: './accounts-app.component.html',
  styleUrls: ['./accounts-app.component.css']
})
export class AccountsAppComponent implements OnInit{
  accounts: {name: string, status: string}[];

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
