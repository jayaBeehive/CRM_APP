import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SubscriptionComponent } from '../subscription.component';

@Component({
  selector: 'app-subscriptionpage',
  templateUrl: './subscriptionpage.component.html',
  styleUrls: ['./subscriptionpage.component.scss'],
})
export class SubscriptionpageComponent implements OnInit {
  recentPlan = {
    planName: 'weekly',
    status: 'expired',
    expiryDate: '2025-01-15'
  };
  
  constructor(
    private fb: FormBuilder,
    public modalController: ModalController
  ) {}

  plans = {
    monthly: { days: 30, discount: 0 },
    quarterly: { days: 90, discount: 5 },
    yearly: { days: 365, discount: 10 }
  };

  basePrice = 500;
  adminPrice = 1000;
  couponDiscount = 0;
  subscriptionForm!: FormGroup;

  ngOnInit() {
    this.subscriptionForm = this.fb.group({
      plan: ['monthly', Validators.required],
      userType: ['single', Validators.required],
      userCount: ['', [
        Validators.pattern(/^[0-9]{1,2}$/)
      ]],
      promoCode: ['', [
        Validators.minLength(4),
        Validators.maxLength(10)
      ]]
    });

    this.subscriptionForm.get('plan')!.valueChanges.subscribe(() => {
      this.subscriptionForm.patchValue({
        userType: 'single',
        userCount: ''
      });
    });
    this.subscriptionForm.get('userType')!.valueChanges.subscribe(type => {
      if (type !== 'admin') {
        this.subscriptionForm.patchValue({ userCount: '' });
      }
    });
  }

  get selectedPlan() {
    return this.subscriptionForm.value.plan;
  }

  // get totalAmount(): number {
  //   const selectedPlan = this.selectedPlan;
  //   const userType = this.subscriptionForm.value.userType;
  //   const users = Number(this.subscriptionForm.value.userCount || 0);

  //   let multiplier = 1;
  //   if (selectedPlan === 'quarterly') multiplier = 3;
  //   if (selectedPlan === 'yearly') multiplier = 12;

  //   let baseAmount = 0;

  //   if (userType === 'single') {
  //     baseAmount = this.basePrice * multiplier;
  //   } else {
  //     if (!users || users <= 0) {
  //       return 0;
  //     }
  //     baseAmount = (this.adminPrice + users * this.basePrice) * multiplier;
  //   }

  //   let discount = 0;
  //   if (selectedPlan === 'quarterly') discount = this.plans.quarterly.discount;
  //   if (selectedPlan === 'yearly') discount = this.plans.yearly.discount;

  //   const discountedAmount = baseAmount - (baseAmount * discount) / 100;

  //   return Math.round(discountedAmount);
  // }

  get totalAmount(): number {
    const selectedPlan = this.selectedPlan;
    const userType = this.subscriptionForm.value.userType;
    const users = Number(this.subscriptionForm.value.userCount || 0);

    let multiplier = 1;
    if (selectedPlan === 'quarterly') multiplier = 3;
    if (selectedPlan === 'yearly') multiplier = 12;

    let baseAmount = 0;
    if (userType === 'single') {
      baseAmount = this.basePrice * multiplier;
    } else {
      if (!users || users <= 0) return 0;
      baseAmount = (this.adminPrice + users * this.basePrice) * multiplier;
    }

    let planDiscount = 0;
    if (selectedPlan === 'quarterly') planDiscount = 5;
    if (selectedPlan === 'yearly') planDiscount = 10;

    let amount = baseAmount - (baseAmount * planDiscount) / 100;
    amount = amount - (amount * this.couponDiscount) / 100;
    return Math.round(amount);
  }


  async openPlanLog() {
    const modal = await this.modalController.create({
      component: SubscriptionComponent
    });
    await modal.present();
  }

  applyPromo() {
    const code = this.subscriptionForm.value.promoCode?.trim().toUpperCase();

    const couponMap: any = {
      SAVE10: 10,
      SAVE20: 20,
      NEW5: 5
    };

    if (couponMap[code]) {
      this.couponDiscount = couponMap[code];
    } else {
      this.couponDiscount = 0;
    }
  }

  payClicked() {
    console.log('data', this.subscriptionForm.value);
  }
}