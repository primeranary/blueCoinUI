import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentPage } from './payment';
import { TransactionService } from '../../providers/transaction-service';
import { TransactionComponent } from '../../components/transaction/transaction';


@NgModule({
  declarations: [
    PaymentPage,
   TransactionComponent
  ],
  imports: [
    IonicPageModule.forChild(PaymentPage), 
  ],
  providers: [
    TransactionService,
  ],
})
export class PaymentPageModule {}
