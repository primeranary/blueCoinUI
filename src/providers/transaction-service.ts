import { Injectable, transition } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';


@Injectable()
export class TransactionService {
  

  public API = 'http://localhost:8080/';
  

  constructor(public http: HttpClient, private alertCtrl: AlertController) {
  }

  getTransactions(): Observable<any> {
    return this.http.get(this.API + 'transactions');
  }

  postTransactions(path: string, data: any):  Observable<any> {
    return this.http.post(this.API + path, data);
  }

}