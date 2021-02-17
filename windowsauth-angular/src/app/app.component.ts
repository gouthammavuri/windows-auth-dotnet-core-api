import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title: string = 'windowsauth-angular';
  public winAccount: any = undefined;

  constructor(private acctServ: AccountService) {
    acctServ.test().subscribe(x => {
      console.log(x);
      this.winAccount = x;
    });
  }

  ngOnInit() {
  }
}
