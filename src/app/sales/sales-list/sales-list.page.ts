import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.page.html',
  styleUrls: ['./sales-list.page.scss'],
})
export class SalesListPage implements OnInit {

  constructor(private route:Router, public modalController: ModalController) { }

  ngOnInit() {}

  sales = [
    {
      id: 1,
      status: 'To be paid',
      leadName: 'Sanjeev Negi',
      phone: '9878787878',
      inventory: 'Green wood city, Godrej',
      leadFor: 'Sale',
      amount: 100000
    },
    {
      id: 2,
      status: 'Fully Paid',
      leadName: 'Sanjeev Negi',
      phone: '9878787878',
      inventory: 'Green wood city, Godrej',
      leadFor: 'Rent',
      amount: 200000
    },
    {
      id: 3,
      status: 'Partially Paid',
      leadName: 'Sanjeev Negi',
      phone: '9878787878',
      inventory: 'Green wood city, Godrej',
      leadFor: 'Sale',
      amount: 50000
    }
  ];

  totalPaid = 200000;
  toBePaid = 100000;

  inventoryCreation(){
    this.route.navigate(['/inventory'])
    this.modalController.dismiss({
      dismissed: true,
      loaddata: false,
    });
  }

  salesDetail(){
    this.route.navigate(['/sales-detail']);
  }

  openLedger(){
    this.route.navigate(['/ledger']);
  }

}
