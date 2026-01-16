import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent implements OnInit {

  constructor(public modalController: ModalController) { 
  //  this.planType = this.navParams.get('value');
  }

  ngOnInit() {}
  public dismiss(): void {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
