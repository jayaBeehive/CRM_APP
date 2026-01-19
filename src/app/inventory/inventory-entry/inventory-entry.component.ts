
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { InventoryListComponent } from '../inventory-list/inventory-list.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-inventory-entry',
  templateUrl: './inventory-entry.component.html',
  styleUrls: ['./inventory-entry.component.scss'],
})
export class InventoryEntryComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    public modalController: ModalController
  ) { }

  ngOnInit() {}
  selectedSegment: string='seller';
  selectedFileName: string = '';

  inventoryForm = this.fb.group({
    sellerName: ['', [Validators.required]],
    contactNumber: ['', [
      Validators.required, 
      Validators.pattern(/^[6-9]\d{9}$/)
    ]],
    emailId: ['', [
      Validators.required, 
      Validators.email
    ]],
    location: ['', [Validators.required]],
    inventorySource: ['', [Validators.required]],
    remarks: [''],
    projectName: ['', [Validators.required]],
    leadFor: ['', [Validators.required]],
    propertyType: ['', [Validators.required]],
    inventory: ['', [Validators.required]],
    inventorySize: ['', [
      Validators.required,
      Validators.min(100),
      Validators.max(10000)
    ]],
    minBudget: ['', [Validators.required, Validators.min(0)]],
    maxBudget: ['', [Validators.required, Validators.min(0)]],
    locationPref: ['', [Validators.required]],
    amenities: [''],
    attachment: [null]
  });

  onlyDigits(event: any, fieldName: string) {
    if (fieldName === 'contactNumber') {
      const input = event.target;
      input.value = input.value.replace(/[^0-9]/g, '').slice(0, 10);
    }
  }

  basicFields = [
    { icon: 'person-outline', label: 'Seller Name', name: 'sellerName', required:true },
    { icon: 'call-outline', label: 'Contact Number', name: 'contactNumber', required:true },
    { icon: 'mail-outline', label: 'Email Id', name: 'emailId', required:true },
    { icon: 'location-outline', label: 'Location', name: 'location', required:true },
    { icon: 'disc-outline', label: 'Inventory Source', name: 'inventorySource', required:true },
  ];

  async submitForm() {
    if (this.inventoryForm.valid) {
      console.log('Form Submitted:', this.inventoryForm.value);
    }
    const modal = await this.modalController.create({
        component: InventoryListComponent
      });
    await modal.present();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
      console.log('Selected file:', file.name, file.size, file.type);
    }
  }

  resetForm() {
    this.inventoryForm.reset();
    this.selectedFileName = '';
  }

  user() {
    this.router.navigate(['/pages/users']);
  }
  filter(){
    this.router.navigate(['/pages/filter']);
  }
  logout(){
    this.router.navigate(['/pages/login']);
  }
}
