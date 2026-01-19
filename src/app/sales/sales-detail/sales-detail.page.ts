import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonPopover } from '@ionic/angular';

@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.page.html',
  styleUrls: ['./sales-detail.page.scss'],
})
export class SalesDetailPage implements OnInit {
  @ViewChild('ionPopover1') public ionPopover1: IonPopover;
  @ViewChild('ionPopover2') public ionPopover2: IonPopover;
  @ViewChild('leadPopover') public leadPopover: IonPopover;
  @ViewChild('inventoryPopover') public inventoryPopover: IonPopover;
  
  saleForm: FormGroup;
  sale: any = {
    id: 1,
    lead: {
      id: 740,
      status: 'Converted',
      customerName: 'Sanjeev Negi',
      phone: '9878787878',
      for: 'Sale',
      date: 'Sep 20, 2025',
      location: 'Gurugram',
      propertyType: 'Apartment',
      inventoryType: '1 BHK',
      size: '900 Sq. ft.',
      budgetRange: '50 - 60 L',
      locationPref: 'Kamothe, Navi Mumbai',
      amenities: 'Park Facing, Club',
      followupStatus: 'Follow Up'
    },
    inventory: {
      id: 740,
      status: 'Sold',
      sellerName: 'Godrej Ltd',
      projectName: 'Green Wood City',
      for: 'Sale',
      propertyType: 'Apartment',
      inventoryType: '1 BHK',
      size: '900 Sq. ft.',
      location: 'Kamothe, Navi Mumbai',
      amenities: 'Park Facing, Club',
      price: '55 L'
    }
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.saleForm = this.fb.group({
      saleValue: ['', [Validators.required, Validators.min(0)]],
      commissionEarned: ['', [Validators.required, Validators.min(0)]],
      amountPaid: ['', [Validators.required, Validators.min(0)]],
      balanceAmount: [{value: '', disabled: true}],
      planType: ['', Validators.required],
      fromdate: ['', Validators.required],
      time: ['', Validators.required],
      setReminder: [false]
    });
  }

  ngOnInit() {
    // Load sale data from service if needed
    this.calculateBalance();
  }

  formatAmount(event: any, fieldName: string) {
    let value = event.target.value.replace(/[^0-9.]/g, '');
    
    // Format with commas
    if (value) {
      const parts = value.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      value = parts.join('.');
    }
    
    this.saleForm.patchValue({
      [fieldName]: value
    });
    
    if (fieldName !== 'balanceAmount') {
      this.calculateBalance();
    }
  }

  calculateBalance() {
    const saleValue = this.parseAmount(this.saleForm.get('saleValue')?.value || '0');
    const amountPaid = this.parseAmount(this.saleForm.get('amountPaid')?.value || '0');
    
    const balance = saleValue - amountPaid;
    
    this.saleForm.patchValue({
      balanceAmount: balance.toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    });
  }

  parseAmount(amountString: string): number {
    return parseFloat(amountString.replace(/,/g, '')) || 0;
  }

  onSubmit() {
    if (this.saleForm.valid) {
      const formData = {
        ...this.saleForm.value,
        balanceAmount: this.parseAmount(this.saleForm.get('balanceAmount')?.value || '0')
      };
      
      console.log('Form submitted:', formData);
      this.router.navigate(['/sales-list']);
    }
  }

  goBack() {
    this.router.navigate(['/sales-list']);
  }

  onPopoverClick() {
    this.ionPopover1.dismiss();
    this.ionPopover2.dismiss();
  }

  onDateChange(event: any) {
    this.saleForm.patchValue({
      fromdate: event.detail.value
    });
    this.ionPopover1.dismiss();
  }

  onTimeChange(event: any) {
    this.saleForm.patchValue({
      time: event.detail.value
    });
    this.ionPopover2.dismiss();
  }

  showLeadDetails(event: any) {
    this.leadPopover.event = event;
    this.leadPopover.present();
  }

  showInventoryDetails(event: any) {
    this.inventoryPopover.event = event;
    this.inventoryPopover.present();
  }

  closeLeadPopover() {
    this.leadPopover.dismiss();
  }

  // Method to close inventory popover
  closeInventoryPopover() {
    this.inventoryPopover.dismiss();
  }
}