import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent implements OnInit {
  ngOnInit(){}
  constructor(private route:Router, public modalController: ModalController){}
  
  inventoryList = [
    {
      id: 740,
      status: 'Available',
      sellerName: 'Godrej Ltd',
      projectName: 'Green Wood City',
      leadFor: 'Sale',
      selected: false
    },
    {
      id: 741,
      status: 'Available',
      sellerName: 'Godrej Ltd',
      projectName: 'Palm Green City',
      leadFor: 'Sale',
      selected: false
    },
    {
      id: 742,
      status: 'Sold',
      sellerName: 'Chittaranjan Dasgupta',
      projectName: 'Palm Green City',
      leadFor: 'Rent',
      selected: false
    },
    {
      id: 743,
      status: 'Not Available',
      sellerName: 'Chittaranjan Dasgupta',
      projectName: 'Palm Green City',
      leadFor: 'Rent',
      selected: false
    }
  ];
  
  inventoryCreation(){
    this.route.navigate(['/inventory'])
    this.modalController.dismiss({
      dismissed: true,
      loaddata: false,
    });
  }
  editInventory(){
    this.route.navigate(['/inventory'])
    this.modalController.dismiss({
      dismissed: true,
      loaddata: false,
    });
  }
  inventoryDetail(){
    this.route.navigate(['/test2'])
    this.modalController.dismiss({
      dismissed: true,
      loaddata: false,
    });
  }
}
