import { Component } from '@angular/core';

/**
 * Generated class for the TransactionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'transaction',
  templateUrl: 'transaction.html'
})
export class TransactionComponent {
  fromId: string;
  toId: string;
  amount: number;

  constructor(fromId: string,toId: string, amount: number ) {
    this.fromId = fromId;
    this.toId = toId;
    this.amount = amount;
  }
}
