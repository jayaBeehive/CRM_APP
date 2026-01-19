import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonPopover, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.page.html',
  styleUrls: ['./ledger.page.scss'],
})
export class LedgerPage implements OnInit {

  constructor(private route:Router, public modalController: ModalController) { }

  ngOnInit() {
    this.ledgerForm.get('timePeriod')?.valueChanges.subscribe(value => {
      if (value !== 'custom') {
        this.ledgerForm.patchValue({
          fromdate: null,
          todate: null
        });
      }
    });
  }
    @ViewChild('ionPopover1') public ionPopover1: IonPopover;
    @ViewChild('ionPopover2') public ionPopover2: IonPopover;
    ledgerForm = new FormGroup({
      timePeriod: new FormControl('', Validators.required),
      fromdate: new FormControl(''),
      todate: new FormControl(''),
    });

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

  // salesDetail(){
  //   this.route.navigate(['/sales-detail']);
  // }

  goBack() {
    this.route.navigate(['/sales-list']);
  }

  onPopoverClick() {
    this.ionPopover1.dismiss();
    this.ionPopover2.dismiss();
  }

}

