import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { InventorySuggestionPage } from './inventory-suggestion/inventory-suggestion.page';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.page.html',
  styleUrls: ['./test2.page.scss'],
})
export class Test2Page implements OnInit {

  constructor(private route:Router, public modalController: ModalController) { }

  ngOnInit() {
  }
status=[
  {icon:'calendar-number-outline' , name:'Date' , value:'Sep 20,2025'},
  {icon:'person-outline' , name:'Customer' , value:'Rupesh Nag'},
  {icon:'location-outline', name:'Location',value:'Gurugram'},
   {icon:'snow-outline', name:'Lead For',value:'Sale'},
    {icon:'home-outline', name:'Property Type',value:'Apartment'},
     {icon:'layers-outline', name:'Inventory',value:'1 BHK'},
       {icon:'resize-outline', name:'Size',value:'900 Sq. ft.'},
        {icon:'cash-outline', name:'Budget Range',value:'50-60 L'},
         {icon:'pin-outline', name:'Location Pref',value:'Kamothe, Navi Mumbai'},
          {icon:'sparkles-outline', name:'Amenities',value:'Park Facing, Club'},
           {icon:'time-outline', name:'Status',value:'Follow Up'},
]

  public dismiss(): void {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  async inventorySuggestion(){
    const modal = await this.modalController.create({
      component: InventorySuggestionPage
    });
    await modal.present();
  }
}
