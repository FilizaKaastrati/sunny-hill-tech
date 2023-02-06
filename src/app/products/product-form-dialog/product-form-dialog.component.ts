import {Component, Inject, OnInit} from '@angular/core';
import {Product, ProductApiService} from "../product-api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  styleUrls: ['./product-form-dialog.component.css']
})
export class ProductFormDialogComponent implements OnInit {
  public constructor(
    public dialogRef: MatDialogRef<ProductFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private productApiService: ProductApiService,
  ) {
  }

  public formData: any = null;

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl(this.product.name ?? ""),
      category: new FormControl(this.product.category ?? ""),
      price: new FormControl(this.product.price ?? ""),
      date: new FormControl(this.product.date ?? ""),
    });
  }

  public close() {
    this.dialogRef.close();
  }

  public save(formData: Product) {
    this.product.id ? this.update(formData) : this.create(formData)
  }

  protected create(data: Product) {
    this.productApiService.create(data).subscribe((result) => {
      this.product = result;
      this.close();
    });
  }

  protected update(data: Product) {
    this.productApiService.update(this.product.id, data).subscribe((result) => {
      this.product = result;
      this.close();
    });
  }
}

