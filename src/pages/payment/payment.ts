
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { TransactionService } from '../../providers/transaction-service';
import { WalletService } from '../../providers/wallet-service';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})

export class PaymentPage {
  fromId: any;
  toId: any;
  amount: any;
  trans = {fromId: '', toId: '', amount: ''};
  private wallets: Array<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private http: HttpClient, 
    public transfer: TransactionService,
    public walletService: WalletService,
    private alertCtrl: AlertController) {
 this.navCtrl = navCtrl;
//  this.fromId = document.getElementByIdaa;
//  this.toId ='';
//  this.amount = 0;
  }

  ionViewDidLoad() {
    this.walletService.getWalletAmount().subscribe(wallets => {
      this.wallets = wallets;
    })
  }

  transferMoney(){
      console.log(this.fromId);
      console.log(this.toId);
      console.log(this.amount);
      console.log(this.trans);
      this.transfer.postTransactions("checkTx", this.trans)
          .subscribe(data => {
              this.successAlert();
              this.trans.fromId=null;
              this.trans.toId=null;
              this.trans.amount=null;
          }, error => {
              this.failAlert();
          })
  }

  successAlert() {
    let alert = this.alertCtrl.create({
      subTitle: 'Payment is completed!',
      buttons: ['Ok']
    });
    alert.present();
  }

  failAlert() {
    let alert = this.alertCtrl.create({
      subTitle: 'Something went wrong...',
      buttons: ['Ok']
    });
    alert.present();
  }

}